import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Field, ID, ObjectType, Int, registerEnumType, Float } from '@nestjs/graphql';

export enum Education {
    MIDDLE_SCHOOL = 0,      // 初中
    HIGH_SCHOOL = 1,        // 高中
    UNDERGRADUATE = 2,      // 本科
    COLLEGE = 3,            // 专科
    MASTER = 4,             // 硕士
    DOCTOR = 5              // 博士
    // ...
}

registerEnumType(Education, {
    name: 'Education',
    description: '学历'
})

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { nullable: false, description: "用户的 ID" })
    id: number;

    @Column()
    @Field(type => String, { nullable: false, description: "微信平台提供的 openid" })
    openid: string;

    @Column()
    @Field(type => String, { nullable: true, description: "姓名" })
    name: string;

    @Column()
    @Field(type => Date, { nullable: true, description: "生日" })
    birthday: Date;

    @Column()
    @Field(type => Education, { nullable: true, description: "学历" })
    education: Education;

    @Column()
    @Field(type => String, { nullable: true, description: "省" })
    province: string;

    @Column()
    @Field(type => String, { nullable: true, description: "市" })
    city: string;

    @Column()
    @Field(type => String, { nullable: true, description: "区" })
    region: string;

    @Column()
    @Field(type => String, { nullable: true, description: "头像 URL" })
    avatar_url: string;

    @Column()
    @Field(type => String, { nullable: true, description: "电子邮箱" })
    email: string;

    @Column()
    @Field(type => String, { nullable: true, description: "手机号" })
    phone: string;
}