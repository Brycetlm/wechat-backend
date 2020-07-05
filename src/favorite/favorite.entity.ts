import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Field, ID, ObjectType, Int, registerEnumType, Float } from '@nestjs/graphql';

@ObjectType()
export class FavoriteEntity {
    @Field(type => Int, { nullable: false, description: "收藏记录 ID" })
    id: number;

    @Field(type => Int, { nullable: false, description: "用户的 ID" })
    user_id: number;

    @Field(type => Int, { nullable: false, description: "职位的 ID" })
    position_id: number;

    @Field(type => Date, { nullable: false, description: "创建时间" })
    created_at: Date;

    @Field(type => Date, { nullable: false, description: "修改时间" })
    updated_at: Date;

    @Field(type => Boolean, { nullable: false, description: "是否删除" })
    is_deleted: boolean;
}

@ObjectType()
export class FavoriteSearchData {
    @Field(type => [FavoriteEntity], { nullable: true, description: "返回的收藏实体列表" })
    list: FavoriteEntity[];
}

@Entity()
export class Favorite {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { nullable: false, description: "收藏记录 ID" })
    id: number;

    @Column()
    @Field(type => Int, { nullable: false, description: "用户的 ID" })
    user_id: number;

    @Column()
    @Field(type => Int, { nullable: false, description: "职位的 ID" })
    position_id: number;

    @Column()
    @Field(type => Date, { nullable: false, description: "创建时间" })
    created_at: Date;

    @Column()
    @Field(type => Date, { nullable: false, description: "修改时间" })
    updated_at: Date;

    @Column()
    @Field(type => Boolean, { nullable: false, description: "是否删除" })
    is_deleted: boolean;
}