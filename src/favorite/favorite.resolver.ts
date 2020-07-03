import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { FavoriteService } from "./favorite.service";
import { FavoriteEntity } from './favorite.entity';

@Resolver('Favorite')
export class FavoriteResolver {
    constructor(
        private FavoriteService: FavoriteService
    ) { }
    
}