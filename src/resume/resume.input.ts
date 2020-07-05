import { Field, ID, ObjectType, Int, registerEnumType, Float, InputType } from '@nestjs/graphql';
import { ResumePermission } from './resume.entity';

@InputType()
export class ResumeInput {
    @Field(type => Int, { nullable: true, description: "ID" })
    id: number;

    @Field(type => String, { nullable: true, description: "简历名称" })
    name: string;

    @Field(type => Int, { nullable: false, description: "所属用户 ID" })
    user_id: number;

    @Field(type => Int, { nullable: true, description: "工资期望最小值" })
    salary_min: number;

    @Field(type => Int, { nullable: true, description: "工资期望最大值" })
    salary_max: number;

    @Field(type => String, { nullable: true, description: "省" })
    province: string;

    @Field(type => String, { nullable: true, description: "市" })
    city: string;

    @Field(type => String, { nullable: true, description: "区" })
    region: string;

    @Field(type => ResumePermission, { nullable: true, description: "简历权限" })
    permission: ResumePermission;

    @Field(type => Int, { nullable: true, description: "工作经验（年）" })
    exp: number;
}