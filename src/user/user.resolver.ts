import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { UserService } from "./user.service";
import { UserEntity } from './user.entity';

@Resolver('User')
export class UserResolver {
    constructor(
        private userService: UserService
    ) { }

    //
    @Query(returns => UserEntity, { name: "getUserInfoById", description: "使用 ID 获取用户信息" })
    async getCompanyInfoById(
        @Args({ name: 'userId' , type: () => Int, nullable: false }) userId: number
    ): Promise<UserEntity> {
        return await this.userService.getCompanyInfoById(userId);
    }
}