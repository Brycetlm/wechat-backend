import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cats } from './cats.entity';
import { Repository } from 'typeorm';

// TypeORM 使用仓库风格（回忆软件架构知识）
// 服务类，和具体的数据仓库之间进行交互
@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(Cats)
        private readonly catsRepository : Repository<Cats>      // 数据仓库
    ) {}

    public async getName(id: number): Promise<String> {
        const name = (await this.catsRepository.findOne({ id: id })).name;
        return name;
    }
}
