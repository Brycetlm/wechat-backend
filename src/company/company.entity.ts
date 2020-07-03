import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Field, ID, ObjectType, Int, registerEnumType, Float } from '@nestjs/graphql';

@ObjectType()
export class CompanyEntity {
    @Field(type => Int, { nullable: false, description: "公司的 ID" })
    id: number;

    @Field(type => String, { nullable: true, description: "名称" })
    name: string;

    @Field(type => String, { nullable: true, description: "公司简介" })
    profile: string;

    @Field(type => String, { nullable: true, description: "省" })
    province: string;

    @Field(type => String, { nullable: true, description: "市" })
    city: string;

    @Field(type => String, { nullable: true, description: "区" })
    region: string;

    @Field(type => String, { nullable: true, description: "法人姓名" })
    corporate: string;

    @Field(type => String, { nullable: true, description: "注册资本" })
    assets: string;

    @Field(type => Date, { nullable: true, description: "注册日期" })
    birthday: Date;

    @Field(type => String, { nullable: true, description: "电话" })
    phone: string;

    @Field(type => String, { nullable: true, description: "公司 LOGO 的 URL" })
    logo_url: string;
}

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { nullable: false, description: "公司的 ID" })
    id: number;

    @Column()
    @Field(type => String, { nullable: true, description: "名称" })
    name: string;

    @Column()
    @Field(type => String, { nullable: true, description: "公司简介" })
    profile: string;

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
    @Field(type => String, { nullable: true, description: "法人姓名" })
    corporate: string;

    @Column()
    @Field(type => String, { nullable: true, description: "注册资本" })
    assets: string;

    @Column()
    @Field(type => Date, { nullable: true, description: "注册日期" })
    birthday: Date;

    @Column()
    @Field(type => String, { nullable: true, description: "电话" })
    phone: string;

    @Column()
    @Field(type => String, { nullable: true, description: "公司 LOGO 的 URL" })
    logo_url: string;

}