import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Position, PositionEntity, PositionSearchData } from './position.entity';

@Injectable()
export class PositionService {
    constructor(
        @InjectRepository(Position)
        private readonly positionRepository: Repository<Position>
    ) { }
    
    async getDefaultPositions(): Promise<PositionSearchData> {
        let count = await this.positionRepository.count();
        if (count <= 10) {
            return { list: await this.positionRepository.find() };
        } else {
            return { list: await this.positionRepository.createQueryBuilder('position').take(10).getMany() };
        }
    }
}