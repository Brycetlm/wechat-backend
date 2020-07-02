import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apply, ApplyEntity } from './apply.entity';

@Injectable()
export class ApplyService {
    constructor(
        @InjectRepository(Apply)
        private readonly applyRepository: Repository<Apply>
    ) { }

    async getApplyInfolById(ApplyId: number): Promise<ApplyEntity>{
        return await(this.applyRepository.findOne({id: ApplyId}));
    }
}