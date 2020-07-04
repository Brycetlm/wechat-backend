import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite, FavoriteEntity } from './favorite.entity';

@Injectable()
export class FavoriteService {
    constructor(
        @InjectRepository(Favorite)
        private readonly favoriteRepository: Repository<Favorite>
    ) { }

    async getFavoriteByUser(userId: number) {
        return await this.favoriteRepository.find({ user_id: userId });
    }

    async checkFavoriteByPos(positionId: number, userId: number) {
        let result = await this.favoriteRepository.findOne({ position_id: positionId, user_id: userId });
        if (result) {
            return true;
        }
        return false;
    }

}