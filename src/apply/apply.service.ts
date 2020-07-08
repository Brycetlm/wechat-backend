import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apply, ApplyEntity, ApplyState } from './apply.entity';
import { ApplyInput } from './apply.input';
import { Position } from 'src/position/position.entity';
import { Company } from 'src/company/company.entity';

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
            id: id + 1,
            position_id: record.position_id,
            resume_id: record.resume_id,
            user_id: record.user_id,
            state: ApplyState.POST,
            created_at: now,
            updated_at: now,
            is_deleted: false
        });
        return true;
    }

    async deleteApply(applyId: number): Promise<Boolean> {
        const apply = await this.applyRepository.findOne({ id: applyId });
        if (apply ) {
            await this.applyRepository.update({ id: applyId }, { is_deleted: true });
            return true;
        } else {
            return false;
        }
    }

    //��ȡ�û�����������Ϣ
    async getApplyInfoByUserId(userId: number): Promise<ApplyEntity[]> {

        return await this.applyRepository.find({ user_id: userId });
    }

    async getApplyByCompany(companyId: number): Promise<ApplyEntity[]> {
        const query = this.applyRepository.createQueryBuilder("app")
            .select(["app.id, app.user_id, app.position_id, app.resume_id, app.state, app.created_at, app.updated_at"])
            .leftJoin(Position, "pos", "pos.id = app.position_id")
            .leftJoin(Company, "company", "pos.company_id = company.id")
            .where("company.id = " + companyId);
        const result = await this.applyRepository.query(query.getSql());
        return result;
    }

    async getApplyByResume(resumeId: number): Promise<ApplyEntity[]> {
        return await this.applyRepository.find({ resume_id: resumeId });
    }

    async getAllApplyInfo(): Promise<ApplyEntity[]> {
        return await this.applyRepository.find();
    }
}