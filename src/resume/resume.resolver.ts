import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { ResumeService } from "./resume.service";
import { ResumeEntity } from "./resume.entity"
import { ResumeInput } from './resume.input';

@Resolver('Resume')
export class ResumeResolver {
    constructor(
        private resumeService: ResumeService
    ) { }

    @Query(returns => ResumeEntity, { name: "getResumeInfoById", description: "使用 ID 获取公司信息" })
    async getCompanyInfoById(
        @Args({ name: 'resumeId' , type: () => Int, nullable: false }) resumeId: number
    ): Promise<ResumeEntity> {
        return await this.resumeService.getResumeInfoById(resumeId);
    }

    @Mutation(returns => Boolean, { name: 'updateResumeInfo', description: "更新或插入简历信息，输入中不含 ID 或者查无此 ID 时新建记录，否则修改已有记录" })
    async updateResumeInfo(
        @Args({ name: 'resumeInput', type: () => ResumeInput, nullable: false }) resumeInput: ResumeInput
    ) {
        return await this.resumeService.updateResumeInfo(resumeInput);
    }
}