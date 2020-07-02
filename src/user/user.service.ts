import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    //获取函数
    async getCompanyInfoById(userId: number): Promise<UserEntity> {
        return await this.userRepository.findOne({ id: userId });
    }

}