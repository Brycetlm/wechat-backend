import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { ApplyService } from "./apply.service";

@Resolver('Apply')
export class ApplyResolver {
    constructor(
        private applyService: ApplyService
    ) { }

}