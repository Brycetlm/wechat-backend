import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Field, ID, ObjectType, Int, registerEnumType, Float } from 'type-graphql';

@Entity()
export class Position {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { nullable: false, description: "职位 ID" })
    id: number;

    @Column()
    @Field(type => Int, { nullable: false, description: "公司 ID"})
    company_id: number;

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