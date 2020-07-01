import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from "type-graphql";
import { CompanyService } from "./company.service";

@Resolver('Company')
export class CompanyResolver {
    constructor(
        companyService: CompanyService
    ) { }

}