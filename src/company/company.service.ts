import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company, CompanyEntity } from './company.entity';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private readonly companyRepository: Repository<Company>
    ) { }
    
    async getCompanyInfoById(companyId: number): Promise<CompanyEntity> {
        return await this.companyRepository.findOne({ id: companyId });
    }

}