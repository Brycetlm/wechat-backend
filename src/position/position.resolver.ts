import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { PositionService } from "./position.service";
import { PositionEntity, PositionSearchData } from './position.entity';

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

}