import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { FavoriteService } from "./favorite.service";
import { FavoriteEntity, FavoriteSearchData } from './favorite.entity';
import { query } from 'express';
import { Position } from 'src/position/position.entity';
import { FavoriteInput } from './favorite.input';

@Resolver('Favorite')
export class FavoriteResolver {
    constructor(
        private favoriteService: FavoriteService
    ) { }

    @Query(returns => FavoriteSearchData, { name: "getFavoriteInfoByUser", description: "使用用户 ID 获取该用户的收藏信息" })
    async getFavoriteInfoByUser(
        @Args({ name: 'userId', type: () => Int, nullable: false }) userId: number
    ): Promise<FavoriteSearchData> {
        return await this.favoriteService.getFavoriteByUser(userId);
    }

    @Query(returns => FavoriteSearchData, { name: "getFavorDel", description: "使用用户 ID 获取该用户的收藏信息&不包含删除的" })
    async getFavorDel(
        @Args({ name: 'userId', type: () => Int, nullable: false }) userId: number
    ): Promise<FavoriteSearchData> {
        return await this.favoriteService.getFavorDel(userId);
    }

    @Query(returns => [FavoriteEntity], { name: "checkFavoriteInfoByPos", description: "使用职位招聘 ID、用户 ID判断是否收藏" })
    async checkFavoriteInfoByPos(
        @Args({ name: 'PositionId', type: () => Int, nullable: false }) PositionId: number,
        @Args({ name: 'userId', type: () => Int, nullable: false }) userId: number
    ): Promise<boolean> {
        return await this.favoriteService.checkFavoriteByPos(PositionId, userId);
    }

    @Mutation(returns => Boolean, { name: "insertFavoriteRecord", description: "插入收藏记录" })
    async insertApplyRecord(
        @Args({ name: 'favoriteInput', type: () => FavoriteInput, nullable: false }) favoriteInput: FavoriteInput
    ): Promise<Boolean> {
        return await this.favoriteService.insertFavoriteRecord(favoriteInput);
    }

    @Mutation(returns => Boolean, { name: "deleteFavor", description: "删除（撤回）收藏记录" })
    async deleteApply(
        @Args({ name: 'positionId', type: () => Int, nullable: false }) positionId: number,
        @Args({ name: 'userId', type: () => Int, nullable: false }) userId: number
    ): Promise<Boolean> {
        return await this.favoriteService.deleteFavor(positionId, userId);
    }
}