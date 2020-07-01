import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { UserService } from "./user.service";

@Resolver('User')
export class UserResolver {
    constructor(
        userService: UserService
    ) { }

}