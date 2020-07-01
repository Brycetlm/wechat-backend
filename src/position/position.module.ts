import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from './position.entity';
import { PositionService } from './position.service';
import { PositionResolver } from './position.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Position])],
    controllers: [],
    providers: [PositionService, PositionResolver]
})
export class PositionModule { }