import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { UserService } from "./user.service";
import { UserEntity } from './user.entity';
import { UserInfoUpdateInput } from './user.input';

@Resolver('User')
export class UserResolver {
    constructor(
        private userService: UserService
    ) { }

    //获取申请信息
    @Query(returns => UserEntity, { name: "getApplyInfoById", description: "使用 ID 获取申请信息" })
    async getApplyInfoById(
        @Args({ name: 'userId', type: () => Int, nullable: false }) userId: number
    ): Promise<any> {
        return await this.userService.getUserInfoById(userId);
    }

    //绑定用户openid
    @Query(returns => Number, { name: "bindOpenId", description: "绑定用户openid" })
    async bindOpenId(
        @Args({ name: 'openId', type: () => String, nullable: false }) openID: string
    ): Promise<number> {
        return await this.userService.bindOpenId(openID);
    }
    

    @Query(returns => UserEntity, { name: "getUserInfoById", description: "使用 ID 获取用户信息" })
    async getUserInfoById(
        @Args({ name: 'userId', type: () => Int, nullable: false }) userId: number
    ): Promise<UserEntity> {
        return await this.userService.getUserInfoById(userId);
    }

    @Mutation(returns => Boolean, { name: "updateUserInfo", description: "修改用户信息" })
    async updateUserInfo(
        @Args({ name: 'userInput', type: () => UserInfoUpdateInput, nullable: false }) userInput: UserInfoUpdateInput
    ): Promise<Boolean> {
        return await this.userService.updateUserInfo(userInput);
    }

    @Mutation(returns => Boolean, { name: "updateAvatar", description: "修改用户头像url" })
    async updateAvatar(
        @Args({ name: 'url', type: () => String, nullable: false }) url: string,
        @Args({ name: 'userInput', type: () => UserInfoUpdateInput, nullable: false }) userInput: UserInfoUpdateInput
    ): Promise<Boolean> {
        return await this.userService.updateAvatar(url, userInput);
    }
}