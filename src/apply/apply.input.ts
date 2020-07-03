import { Field, ID, ObjectType, Int, registerEnumType, Float, InputType } from '@nestjs/graphql';

@InputType()
export class ApplyInput {
    @Field(type => Int, { nullable: false, description: "用户 ID" })
    user_id: number;

    @Field(type => Int, { nullable: false, description: "职位 ID" })
    position_id: number;

    @Field(type => Int, { nullable: false, description: "简历 ID" })
    resume_id: number;
}