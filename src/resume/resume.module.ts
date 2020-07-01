import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resume } from './resume.entity';
import { ResumeService } from './resume.service';
import { ResumeResolver } from './resume.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Resume])],
    controllers: [],
    providers: [ResumeService, ResumeResolver]
})
export class ResumeModule { }