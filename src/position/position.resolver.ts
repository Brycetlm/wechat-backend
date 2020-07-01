import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { PositionService } from "./position.service";

@Resolver('Position')
export class PositionResolver {
    constructor(
        positionService: PositionService
    ) { }

}