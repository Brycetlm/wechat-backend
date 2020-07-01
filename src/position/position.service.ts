import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Position, PositionEntity, PositionSearchData } from './position.entity';
import { PositionTagService } from 'src/position-tag/position-tag.service';

@Injectable()
export class PositionService {
    constructor(
        private readonly positionTagService: PositionTagService,
        @InjectRepository(Position)
        private readonly positionRepository: Repository<Position>
    ) { }

    async getPositionTags(positionId: number) {
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
        for (let item of temp)  {
            let tags = this.getPositionTags(item.id);
            result.push({ tags: tags, ...item });
        }
        return { list: result };
    }
}