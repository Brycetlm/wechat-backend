import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { FavoriteService } from "./favorite.service";
import { FavoriteEntity } from './favorite.entity';
import { query } from 'express';
import { Position } from 'src/position/position.entity';

@Resolver('Favorite')
export class FavoriteResolver {
    constructor(
        private favoriteService: FavoriteService
    ) { }

    @Query(returns => [FavoriteEntity], { name: "getFavoriteInfoByUser", description: "使用用户 ID 获取该用户的收藏信息" })
    async getFavoriteInfoByUser(
        @Args({ name: 'userId', type: () => Int, nullable: false }) userId: number
    ): Promise<FavoriteEntity[]> {
        return await this.favoriteService.getFavoriteByUser(userId);
    }

    @Query(returns => [FavoriteEntity], { name: "checkFavoriteInfoByPos", description: "使用职位招聘 ID、用户 ID判断是否收藏" })
    async checkFavoriteInfoByPos(
        @Args({ name: 'PositionId', type: () => Int, nullable: false }) PositionId: number,
        @Args({ name: 'userId', type: () => Int, nullable: false }) userId: number
    ): Promise<boolean> {
        return await this.favoriteService.checkFavoriteByPos(PositionId, userId);
    }
}