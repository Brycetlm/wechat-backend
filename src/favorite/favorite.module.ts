import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorite } from './favorite.entity';
import { FavoriteService } from './favorite.service';
import { FavoriteResolver } from './favorite.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Favorite])],
    controllers: [],
    providers: [FavoriteService, FavoriteResolver]
})
export class FavoriteModule { }