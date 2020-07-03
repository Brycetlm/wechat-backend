import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apply, ApplyEntity, ApplyState } from './apply.entity';
import { ApplyInput } from './apply.input';

@Injectable()
export class ApplyService {
    constructor(
        @InjectRepository(Apply)
        private readonly applyRepository: Repository<Apply>
    ) { }

    async getApplyInfolById(ApplyId: number): Promise<ApplyEntity>{
        return await(this.applyRepository.findOne({id: ApplyId}));
    }

    async insertApplyRecord(record: ApplyInput): Promise<Boolean> {
        const id = await this.applyRepository.count();
        const now = new Date();
        await this.applyRepository.insert({
            id: id,
            position_id: record.position_id,
            resume_id: record.resume_id,
            user_id: record.user_id,
            state: ApplyState.POST,
            created_at: now,
            updated_at: now
        });
        return true;
    }
}