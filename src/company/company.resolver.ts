import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { CompanyService } from "./company.service";
import { CompanyEntity } from './company.entity';
import { CompanyInput } from './company.input';
import { query } from 'express';

@Resolver('Company')
export class CompanyResolver {
    constructor(
        private companyService: CompanyService
    ) { }

    @Query(returns => CompanyEntity, { name: "getCompanyInfoById", description: "使用 ID 获取公司信息" })
    async getCompanyInfoById(
        @Args({ name: 'companyId', type: () => Int, nullable: false }) companyId: number
    ): Promise<CompanyEntity> {
        return await this.companyService.getCompanyInfoById(companyId);
    }

    @Mutation(returns => Boolean, { name: 'updateCompanyInfo', description: "更新或插入信息，输入中不含 ID 或者查无此 ID 时新建记录，否则修改已有记录" })
    async updateCompanyInfo(
        @Args({ name: 'companyInput', type: () => CompanyInput, nullable: false }) companyInput: CompanyInput
    ): Promise<Boolean> {
        return await this.companyService.updateCompanyInfo(companyInput);
    }

    @Mutation(returns => Boolean, { name: 'deleteCompanyById', description: "删除公司信息" })
    async deleteCompanyById(
        @Args({ name: 'companyId', type: () => Int, nullable: false }) companyId: number
    ): Promise<Boolean> {
        return await this.companyService.deleteCompanyById(companyId);
    }

    @Query(returns => [CompanyEntity], { name: 'getAllCompanyInfo', description: "获取所有公司信息" })
    async getAllCompanyInfo(): Promise<CompanyEntity[]> {
        return await this.companyService.getAllCompanyInfo();
    }
}