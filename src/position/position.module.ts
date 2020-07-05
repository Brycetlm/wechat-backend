import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position, PositionEntity } from './position.entity';
import { PositionService } from './position.service';
import { PositionResolver } from './position.resolver';
import { PositionTagService } from 'src/position-tag/position-tag.service';
import { PositionTag, PositionTagEntity } from 'src/position-tag/position-tag.entity';
import { Company, CompanyEntity } from 'src/company/company.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Position, PositionTag, Company])],
    controllers: [],
    providers: [PositionService, PositionTagService, PositionResolver]
})
export class PositionModule {}