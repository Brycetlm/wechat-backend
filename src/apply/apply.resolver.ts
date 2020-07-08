import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { ApplyService } from "./apply.service";
import { ApplyEntity } from "./apply.entity"
import { ApplyInput } from './apply.input';

@Resolver('Apply')
export class ApplyResolver {
    constructor(
        private applyService: ApplyService
    ) { }

    @Query(returns => ApplyEntity, { name: "getApplyInfoById", description: "使用 ID 获取公司信息" })
    async getApplyInfoById(
        @Args({ name: 'applyId' , type: () => Int, nullable: false }) applyId: number
    ): Promise<ApplyEntity> {
        return await this.applyService.getApplyInfolById(applyId);
    }

    @Mutation(returns => Boolean, { name: "insertApplyRecord", description: "插入申请记录" })
    async insertApplyRecord(
        @Args({ name: 'applyInput', type: () => ApplyInput, nullable: false }) applyInput: ApplyInput
    ): Promise<Boolean> {
        return await this.applyService.insertApplyRecord(applyInput);
    }

    @Mutation(returns => Boolean, { name: "deleteApply", description: "删除（撤回）申请记录" })
    async deleteApply(
        @Args({ name: 'applyId', type: () => Int, nullable: false }) applyId: number
    ): Promise<Boolean> {
        return await this.applyService.deleteApply(applyId);
    }

    //获取用户所有申请信息
    @Query(returns => [ApplyEntity], { name: "getApplyInfoByUserId", description: "使用 UserID 获取其所有申请信息" })
    async getApplyInfoByUserId(
        @Args({ name: 'userId', type: () => Int, nullable: false }) userId: number
    ): Promise<ApplyEntity[]> {
        return await this.applyService.getApplyInfoByUserId(userId);
    }

    @Query(returns => [ApplyEntity], { name: "getApplyByCompany", description: "使用公司 ID 获取其所有申请信息" })
    async getApplyByCompany(
        @Args({ name: 'companyId', type: () => Int, nullable: false }) companyId: number
    ): Promise<ApplyEntity[]> {
        return await this.applyService.getApplyByCompany(companyId);
    }

    @Query(returns => [ApplyEntity], { name: "getApplyByResume", description: "使用简历 ID 获取其所有申请信息" })
    async getApplyByResume(
        @Args({ name: 'resumeId', type: () => Int, nullable: false }) resumeId: number
    ): Promise<ApplyEntity[]> {
        return await this.applyService.getApplyByResume(resumeId);
    }

    @Query(returns => [ApplyEntity], { name: 'getAllApplyInfo', description: "获取所有申请信息" })
    async getAllApplyInfo(): Promise<ApplyEntity[]> {
        return await this.applyService.getAllApplyInfo();
    }
}