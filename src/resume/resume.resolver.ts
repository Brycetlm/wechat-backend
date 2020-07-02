import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { ResumeService } from "./resume.service";
import { ResumeEntity } from "./resume.entity"

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

}