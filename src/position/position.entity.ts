import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Field, ID, ObjectType, Int, registerEnumType, Float } from '@nestjs/graphql';

// 用于 Resolver 的实体类，不带表示数据表列的 Column 修饰器
// ObjectType 修饰器是用于 GraphQL 判断数据类型
@ObjectType()
export class PositionEntity {
    @Field(type => Int, { nullable: false, description: "职位 ID" })
    id: number;

    @Field(type => Int, { nullable: false, description: "公司 ID"})
    company_id: number;

    @Field(type => String, { nullable: false, description: "职位名" })
    name: string;

    @Field(type => String, { nullable: true, description: "职位简介" })
    profile: string;

    @Field(type => String, { nullable: true, description: "招聘条件" })
    condition: string;

    @Field(type => [String], { nullable: true, description: "tag 列表" })
    tags: string[];

    @Field(type => Date, { nullable: true, description: "创建时间" })
    created_at: Date;

    @Field(type => Date, { nullable: true, description: "修改时间" })
    updated_at: Date;
}

// 用一个类型将数组包装起来
@ObjectType()
export class PositionSearchData {
    @Field(type => [PositionEntity], { nullable: true, description: "返回的职位实体列表" })
    list: PositionEntity[];
}

// 数据表实体类，带有 Entity 修饰器但不带有 ObjectType 修饰器
// 即它能被 TypeORM 识别作为数据库的数据实体，但不能被 GraphQL 识别作为数据类型
// 每一个字段也都带有表示数据表列的 Column 修饰器
@Entity()
export class Position {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { nullable: false, description: "职位 ID" })
    id: number;

    @Column()
    @Field(type => Int, { nullable: false, description: "公司 ID"})
    company_id: number;

    @Column()
    @Field(type => String, { nullable: false, description: "职位名" })
    name: string;

    @Column()
    @Field(type => String, { nullable: true, description: "职位简介" })
    profile: string;

    @Column()
    @Field(type => String, { nullable: true, description: "招聘条件" })
    condition: string;

    @Column()
    @Field(type => Date, { nullable: true, description: "创建时间" })
    created_at: Date;

    @Column()
    @Field(type => Date, { nullable: true, description: "修改时间" })
    updated_at: Date;
}