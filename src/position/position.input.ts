import { Field, ID, ObjectType, Int, registerEnumType, Float, InputType } from '@nestjs/graphql';

@InputType()
export class PositionFilterInput {
    @Field(type => Int, { nullable: true, description: "最小期望工资" })
    salary_min: number;

    @Field(type => Int, { nullable: true, description: "最大期望工资" })
    salary_max: number;

    @Field(type => String, { nullable: true, description: "省" })
    province: string;

    @Field(type => String, { nullable: true, description: "市" })
    city: string;

    @Field(type => String, { nullable: true, description: "区" })
    region: string;

    @Field(type => [String], { nullable: true, description: "职位标签" })
    tag: string[];
}