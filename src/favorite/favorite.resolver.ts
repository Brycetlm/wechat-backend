import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { FavoriteService } from "./favorite.service";
import { FavoriteEntity } from './favorite.entity';

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

}