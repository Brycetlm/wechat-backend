import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apply } from './apply.entity';
import { ApplyService } from './apply.service';
import { ApplyResolver } from './apply.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Apply])],
    controllers: [],
    providers: [ApplyService, ApplyResolver]
})
export class ApplyModule { }