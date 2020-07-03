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
}