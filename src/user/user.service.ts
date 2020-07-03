import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserEntity } from './user.entity';
import { UserInfoUpdateInput } from './user.input';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    //获取函数
    async getUserInfoById(userId: number): Promise<UserEntity> {
        return await this.userRepository.findOne({ id: userId });
    }

    async updateUserInfo(userInput: UserInfoUpdateInput): Promise<Boolean> {
        let user = await this.userRepository.findOne({ id: userInput.id });
        if (!user) {
            return false;
        } else {
            // 将输入的对象和表中查出来的用户对象合并，以实现部分更改
            userInput = { ...user, ...userInput };
        }
        this.userRepository.update({
            id: userInput.id
        }, {
            name: userInput.name,
            gender: userInput.gender,
            birthday: userInput.birthday,
            education: userInput.education,
            province: userInput.province,
            city: userInput.city,
            region: userInput.region,
            email: userInput.email,
            phone: userInput.phone,
            avatar_url: userInput.avatar_url
        })
        return true;
    }

    async updateAvatar(url: string, userInput: UserInfoUpdateInput): Promise<Boolean> {
        let user = await this.userRepository.findOne({id: userInput.id});
        if (!user) {
            return false;
        } else {
            userInput = { ...user, ...userInput };
        }

        this.userRepository.update({
            id: userInput.id
        }, {
            avatar_url: url
        })

        return true;
    }

}