import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder, Brackets } from 'typeorm';
import { Position, PositionEntity, PositionSearchData } from './position.entity';
import { PositionTagService } from 'src/position-tag/position-tag.service';
import { PositionFilterInput } from './position.input';
import { CompanyEntity, Company } from 'src/company/company.entity';
import { PositionTagEntity, PositionTag } from 'src/position-tag/position-tag.entity';
import { OrderItem, Order } from 'src/common';

@Injectable()
export class PositionService {
    constructor(
        private readonly positionTagService: PositionTagService,
        @InjectRepository(Position)
        private readonly positionRepository: Repository<Position>,
        @InjectRepository(PositionTag)
        private readonly positionTagRepository: Repository<PositionTag>,
        @InjectRepository(Company)
        private readonly companyRepository: Repository<Company>
    ) { }

    async getPositionTags(positionId: number): Promise<string[]> {
        let tags = [];
        let result = await this.positionTagService.getTagsById(positionId);
        for (let item of result) {
            tags.push(item.tag);
        }
        return tags;
    }

    async getDefaultPositions(): Promise<PositionSearchData> {
        let count = await this.positionRepository.count();
        let result = [];
        let temp = [];
        if (count <= 10) {
            temp = await this.positionRepository.find();
        } else {
            temp = await this.positionRepository.createQueryBuilder('position').take(10).getMany();
        }
        for (let item of temp) {
            let tags = this.getPositionTags(item.id);
            result.push({ tags: tags, ...item });
        }
        return { list: result };
    }

    async getPositionById(positionId: number): Promise<PositionEntity> {
        let result = await this.positionRepository.findOne({ id: positionId });
        let tags = await this.getPositionTags(positionId);
        return { tags: tags, ...result };
    }

    async getPositionByCompany(companyId: number): Promise<PositionEntity[]> {
        let result = await this.positionRepository.find({ company_id: companyId })
        console.log(result);
        let resultEntity = [];
        for (let item of result) {
            resultEntity.push({ tags: null, ...item });
        }
        return resultEntity;
    }

    async getWhere(searchInput: string, filterInput: PositionFilterInput, query: SelectQueryBuilder<Position>) {
        query = query.where("1 = 1");
        if (searchInput) {
            query = query.andWhere(new Brackets(qb => {
                return qb.where("pos.name like '%" + searchInput + "%'")
                    .orWhere("company.name like '%" + searchInput + "%'")
            }));
        }
        if (filterInput) {
            if (filterInput.salary_min && filterInput.salary_max) {
                query = query.andWhere("pos.salary_min >= " + filterInput.salary_min);
            }
            if (filterInput.province && filterInput.city && filterInput.region) {
                query = query.andWhere("company.province = '" + filterInput.province + "'")
                    .andWhere("company.city = '" + filterInput.city + "'")
                    .andWhere("company.region = '" + filterInput.region + "'");
            }
            if (filterInput.tag) {
                query = query.andWhere(new Brackets(qb => {
                    qb.where("0 = 1");
                    for (let item of filterInput.tag) {
                        qb.orWhere("tag.tag like '%" + item + "%'");
                    }
                    return qb;
                }))
            }
        }
        return query;
    }

    async searchFilteredPositions(searchInput: string, filterInput: PositionFilterInput, take: number, skip: number) {
        let orderBy = filterInput.order_by ? filterInput.order_by : OrderItem.UPDATED_AT;
        let order = filterInput.order ? filterInput.order : Order.DESC;
        let query = await this.positionRepository.createQueryBuilder("pos")
            .select(['pos.id, pos.company_id, pos.name, pos.profile, pos.condition, pos.created_at, pos.updated_at'])
            .orderBy('pos.' + orderBy, order)
            .leftJoin(Company, 'company', 'company.id = pos.company_id');
        if (filterInput && filterInput.tag) {
            query = query.leftJoinAndSelect(PositionTag, "tag", "tag.position_id = pos.id");
        }
        query = await this.getWhere(searchInput, filterInput, query);
        let sql = query.getSql();
        console.log("SQL: ", sql);
        let result = await this.positionRepository.query(sql);
        console.log(result);
        if (!skip) skip = 0;
        if (!take) take = 10;
        if (result.length >= skip + take) {
            result = result.splice(skip, take);
        }
        return { list: result };
    }
}