import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserEntity, UserAnalyze } from './user.entity';
import { UserInfoUpdateInput } from './user.input';
import { CommonAnalyzeItem } from 'src/common';

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

    
    
    //绑定openid和uid
    async bindOpenId(openId: string): Promise<number> {
        //const rawData = await this.userRepository.query('SELECT openid FROM `user` where id=6;');
        if (await this.userRepository.findOne({ openid: openId })) {
            let user = await this.userRepository.findOne({ openid: openId });
            var uid = user.id;
            return uid; //返回根据openid找到的用户数据
        }
        else {
            const newUser = await this.userRepository.create();
            const now = new Date();
            newUser.openid = openId;

            //default
            //uid是自动增序添加的，在数据库中可以设置
            newUser.birthday = now;
            newUser.avatar_url = "url";
            newUser.city = "city";
            newUser.gender = "男";
            newUser.education = 1;
            newUser.email = "email";
            newUser.name = "name";
            newUser.phone = "phone";
            newUser.province = "province";
            newUser.region = "region";
            await this.userRepository.insert(newUser);
            var uid = newUser.id;
            return uid;

        }
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

    async getUserAnalyze() {
        const gender = await this.userRepository.query("select distinct gender, count(*) c from user group by gender;");
        const education = await this.userRepository.query("select distinct education, count(*) c from user group by education;");
        const province = await this.userRepository.query("select distinct province, count(*) c from user group by province order by c desc;");
        console.log(gender, education, province);
        let genderResult: CommonAnalyzeItem[] = [];
        let educationResult: CommonAnalyzeItem[] = [];
        let provinceResult: CommonAnalyzeItem[] = [];
        for (let item of gender) {
            genderResult.push({ name: item.gender, value: item.c });
        }
        for (let item of education) {
            educationResult.push({ name: item.education, value: item.c });
        }
        for (let item of province) {
            provinceResult.push({ name: item.province, value: item.c });
        }
        return {
            gender: genderResult,
            education: educationResult,
            province: provinceResult
        };
    }

}