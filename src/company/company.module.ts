import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Company])],
    controllers: [],
    providers: [CompanyService, CompanyResolver]
})
export class CompanyModule { }