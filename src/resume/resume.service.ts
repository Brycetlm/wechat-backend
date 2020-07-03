import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resume, ResumeEntity } from './resume.entity';
import { ResumeInput } from './resume.input';

@Injectable()
export class ResumeService {
    constructor(
        @InjectRepository(Resume)
        private readonly resumeRepository: Repository<Resume>
    ) { }

    async getResumeInfoById(resumeId: number): Promise<ResumeEntity> {
        return await this.resumeRepository.findOne({ id: resumeId });
    }

    async updateResumeInfo(resumeInput: ResumeInput): Promise<Boolean> {
        if (resumeInput.id && await this.resumeRepository.findOne({ id: resumeInput.id })) {
            await this.resumeRepository.update({
                id: resumeInput.id
            }, resumeInput);
            return true;
        } else {
            const id = await this.resumeRepository.count();
            const now = new Date();
            try {
                await this.resumeRepository.insert({
                    id: id,
                    created_at: now,
                    updated_at: now,
                    ...resumeInput
                });
            } catch (error) {
                console.log(error);
                return false;
            }
            return true;
        }
    }

}