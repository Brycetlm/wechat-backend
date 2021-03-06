import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PositionTag } from './position-tag.entity';

@Injectable()
export class PositionTagService {
    constructor(
        @InjectRepository(PositionTag)
        private readonly positionTagRepository: Repository<PositionTag>
    ) { }

    async getTagsById(positionId: number) {
        return await this.positionTagRepository.find({ position_id: positionId });
    }
}