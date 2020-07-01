import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from './position.entity';
import { PositionService } from './position.service';
import { PositionResolver } from './position.resolver';
import { PositionTagService } from 'src/position-tag/position-tag.service';
import { PositionTag } from 'src/position-tag/position-tag.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Position, PositionTag])],
    controllers: [],
    providers: [PositionService, PositionTagService, PositionResolver]
})
export class PositionModule { }