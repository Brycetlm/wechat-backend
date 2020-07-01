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

}