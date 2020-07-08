import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { PositionService } from "./position.service";
import { PositionEntity, PositionSearchData } from './position.entity';
import { PositionFilterInput } from './position.input';

@Resolver('Position')
export class PositionResolver {
    constructor(
        private positionService: PositionService
    ) { }

    @Query(returns => PositionSearchData, {
        name: 'getDefaultPositions',
        description: '获取默认职位列表'
    })
    async getDefaultPositions(): Promise<PositionSearchData> {
        return await this.positionService.getDefaultPositions();
    }

    @Query(returns => PositionEntity, {
        name: 'getPositionById',
        description: '根据 ID 获取职位信息'
    })
    async getPositionById(
        @Args({ name: 'positionId' , type: () => Int, nullable: false }) positionId: number
    ): Promise<PositionEntity> {
        return await this.positionService.getPositionById(positionId);
    }

    @Query(returns => [PositionEntity], {
        name: 'getPositionByCompany',
        description: '根据公司 ID 获取职位信息'
    }) 
    async getPositionByCompany(
        @Args({ name: 'companyId', type: () => Int, nullable: false }) companyId: number 
    ): Promise<PositionEntity[]> {
        return await this.positionService.getPositionByCompany(companyId);
    }


    @Query(returns => Number, {
        name: 'countPosition',
        description: '根据 用户id 获取职位数量'
    })
    async countPosition(
        @Args({ name: 'userId', type: () => Int, nullable: true }) userId: number
    ): Promise<number> {
        return await this.positionService.countPosition();
    }


    @Query(returns => PositionSearchData, {
        name: 'searchFilteredPositions',
        description: '根据搜索字符串和过滤器参数搜索职位'
    }) 
    async searchFilteredPositions(
        @Args({ name: 'searchInput', type: () => String, nullable: true }) searchInput: string,
        @Args({ name: 'filterInput', type: () => PositionFilterInput, nullable: true }) filterInput: PositionFilterInput,
        @Args({ name: 'take', type: () => Int, nullable: true }) take: number,
        @Args({ name: 'skip', type: () => Int, nullable: true }) skip: number 
    ) {
        return await this.positionService.searchFilteredPositions(searchInput, filterInput, take, skip);
    }

}