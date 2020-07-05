import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite, FavoriteEntity, FavoriteSearchData } from './favorite.entity';
import { FavoriteInput } from './favorite.input';

@Injectable()
export class FavoriteService {
    constructor(
        @InjectRepository(Favorite)
        private readonly favoriteRepository: Repository<Favorite>
    ) { }

    async getFavoriteByUser(userId: number): Promise<FavoriteSearchData> {
        let result = await this.favoriteRepository.find({ user_id: userId });
        return { list: result };
    }

    async getFavorDel (userId: number): Promise<FavoriteSearchData> {
        let result = await this.favoriteRepository.find({ user_id: userId, is_deleted: false });
        return { list: result };
    }

    async checkFavoriteByPos(positionId: number, userId: number): Promise<boolean> {
        let result = await this.favoriteRepository.findOne({ position_id: positionId, user_id: userId });
        if (result) {
            return true;
        }
        return false;
    }

    async insertFavoriteRecord(record: FavoriteInput): Promise<Boolean> {
        const id = await this.favoriteRepository.count();
        const now = new Date();
        await this.favoriteRepository.insert({
            id: id + 1,
            position_id: record.position_id,
            user_id: record.user_id,
            created_at: now,
            updated_at: now,
            is_deleted: false
        })

        return true;
    }

    async deleteFavor(favorId: number): Promise<Boolean> {
        const favor = await this.favoriteRepository.findOne({ id: favorId });
        await this.favoriteRepository.update({ position_id: favorId }, { is_deleted: true });
        return true;
    }

}