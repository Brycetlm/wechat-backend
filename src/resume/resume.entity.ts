import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Field, ID, ObjectType, Int, registerEnumType, Float } from 'type-graphql';

export enum ResumeState {
    POST = 0,       // 投递
    REVISION = 1,   // 审核
    ACCEPT = 2,     // 接收
    REJECT = 3      // 拒绝
}

registerEnumType(ResumeState, {
    name: 'ResumeState',
    description: '简历投递状态'
})

export enum ResumePermission {
    PUBLIC = 0,     // 公开
    PRIVATE = 1     // 私有
}

registerEnumType(ResumePermission, {
    name: 'ResumePermisssion',
    description: '简历权限'
})

@Entity()
export class Resume {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { nullable: false, description: "ID" })
    id: number;

    @Column()
    @Field(type => String, { nullable: true, description: "简历名称" })
    name: string;

    @Column()
    @Field(type => Int, { nullable: false, description: "所属用户 ID" })
    user_id: number;

    @Column()
    @Field(type => Int, { nullable: true, description: "工资期望最小值" })
    salary_min: number;

    @Column()
    @Field(type => Int, { nullable: true, description: "工资期望最大值" })
    salary_max: number;

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
    @Field(type => ResumeState, { nullable: true, description: "简历状态" })
    state: ResumeState;

    @Column()
    @Field(type => ResumePermission, { nullable: true, description: "简历权限" })
    permission: ResumePermission;

    @Column()
    @Field(type => Int, { nullable: true, description: "工作经验（年）" })
    exp: number;
}