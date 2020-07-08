import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company, CompanyEntity } from './company.entity';
import { CompanyInput } from './company.input';
import { promises } from 'dns';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private readonly companyRepository: Repository<Company>
    ) { }

    async getCompanyInfoById(companyId: number): Promise<CompanyEntity> {
        return await this.companyRepository.findOne({ id: companyId });
    }

    async deleteCompanyById(companyId: number): Promise<Boolean> {
        if (!await this.companyRepository.findOne({ id: companyId })) {
            return false;
        } else {
            await this.companyRepository.delete({ id: companyId });
        }
        return true;
    }

    async updateCompanyInfo(companyInput: CompanyInput): Promise<Boolean> {
        const id = await this.companyRepository.count();
        try {
            await this.companyRepository.insert({
                id: id,
                ...companyInput
            });
        } catch (error) {
            console.log(error);
            return false;
        }
        return true;
    }
}