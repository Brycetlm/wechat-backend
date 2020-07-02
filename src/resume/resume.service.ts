import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resume, ResumeEntity } from './resume.entity';

@Injectable()
export class ResumeService {
    constructor(
        @InjectRepository(Resume)
        private readonly resumeRepository: Repository<Resume>
    ) { }

    async getResumeInfoById(resumeId: number): Promise<ResumeEntity> {
        return await this.resumeRepository.findOne({ id: resumeId });
    }

}