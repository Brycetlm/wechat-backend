import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Field, ID, ObjectType, Int, registerEnumType, Float } from '@nestjs/graphql';

@ObjectType()
export class PositionTagEntity {
    @Field(type => Int, { nullable: false, description: "ID" })
    id: number;

    @Field(type => Int, { nullable: false, description: "职位 ID" })
    position_id: number;

    @Field(type => String, { nullable: false, description: "tag" })
    tag: string;
}

@Entity()
export class PositionTag {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { nullable: false, description: "ID" })
    id: number;

    @Column()
    @Field(type => Int, { nullable: false, description: "职位 ID" })
    position_id: number;

    @Column()
    @Field(type => String, { nullable: false, description: "tag" })
    tag: string;
}