import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { PositionTagService } from "./position-tag.service";

@Resolver('PositionTag')
export class PositionTagResolver {
    constructor(
        private positionTagService: PositionTagService
    ) { }

}