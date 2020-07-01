import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { ResumeService } from "./resume.service";

@Resolver('Resume')
export class ResumeResolver {
    constructor(
        private resumeService: ResumeService
    ) { }

}