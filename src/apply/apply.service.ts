import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apply } from './apply.entity';

@Injectable()
export class ApplyService {
    constructor(
        @InjectRepository(Apply)
        private readonly applyRepository: Repository<Apply>
    ) { }

}