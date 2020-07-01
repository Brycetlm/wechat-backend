import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { CompanyService } from "./company.service";
import { CompanyEntity } from './company.entity';

@Resolver('Company')
export class CompanyResolver {
    constructor(
        private companyService: CompanyService
    ) { }
    
    @Query(returns => CompanyEntity, { name: "getCompanyInfoById", description: "使用 ID 获取公司信息" })
    async getCompanyInfoById(
        @Args({ name: 'companyId' , type: () => Int, nullable: false }) companyId: number
    ): Promise<CompanyEntity> {
        return await this.companyService.getCompanyInfoById(companyId);
    }

}