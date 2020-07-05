import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Field, ID, ObjectType, Int, registerEnumType, Float } from '@nestjs/graphql';

export enum ResumePermission {
    PUBLIC = 0,     // 公开
    PRIVATE = 1     // 私有
}

registerEnumType(ResumePermission, {
    name: 'ResumePermisssion',
    description: '简历权限'
})

@ObjectType()
export class ResumeEntity {
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
    @Field(type => ResumePermission, { nullable: true, description: "简历权限" })
    permission: ResumePermission;

    @Column()
    @Field(type => Int, { nullable: true, description: "工作经验（年）" })
    exp: number;

    @Column()
    @Field(type => Date, { nullable: true, description: "创建时间" })
    created_at: Date;

    @Column()
    @Field(type => Date, { nullable: true, description: "更新时间" })
    updated_at: Date;
}

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
    @Field(type => ResumePermission, { nullable: true, description: "简历权限" })
    permission: ResumePermission;

    @Column()
    @Field(type => Int, { nullable: true, description: "工作经验（年）" })
    exp: number;

    @Column()
    @Field(type => Date, { nullable: true, description: "创建时间" })
    created_at: Date;

    @Column()
    @Field(type => Date, { nullable: true, description: "更新时间" })
    updated_at: Date;

    @Column()
    @Field(type => Boolean, { nullable: true, description: "是否删除" })
    is_deleted: boolean;
}