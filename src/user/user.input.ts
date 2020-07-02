import { Field, ID, ObjectType, Int, registerEnumType, Float, InputType } from '@nestjs/graphql';
import { Education } from './user.entity';

@InputType()
export class UserInfoUpdateInput {
    @Field(type => Int, { nullable: false, description: "用户的 ID" })
    id: number;

    @Field(type => String, { nullable: true, description: "姓名" })
    name: string;

    @Field(type => Date, { nullable: true, description: "生日" })
    birthday: Date;

    @Field(type => Education, { nullable: true, description: "学历" })
    education: Education;

    @Field(type => String, { nullable: true, description: "省" })
    province: string;

    @Field(type => String, { nullable: true, description: "市" })
    city: string;

    @Field(type => String, { nullable: true, description: "区" })
    region: string;

    @Field(type => String, { nullable: true, description: "电子邮箱" })
    email: string;

    @Field(type => String, { nullable: true, description: "手机号" })
    phone: string;
}