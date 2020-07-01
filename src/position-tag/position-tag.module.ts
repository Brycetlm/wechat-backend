import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionTag } from './position-tag.entity';
import { PositionTagService } from './position-tag.service';
import { PositionTagResolver } from './position-tag.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([PositionTag])],
    controllers: [],
    providers: [PositionTagService, PositionTagResolver]
})
export class PositionTagModule { }