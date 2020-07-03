import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Field, ID, ObjectType, Int, registerEnumType, Float } from '@nestjs/graphql';
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";

export enum ApplyState {
    POST = 0,       // 投递
    REVISION = 1,   // 审核
    ACCEPT = 2,     // 接收
    REJECT = 3      // 拒绝
}

registerEnumType(ApplyState, {
    name: 'ApplyState',
    description: '投递状态'
})

@ObjectType()
export class ApplyEntity {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { nullable: false, description: "ID" })
    id: number;

    @Column()
    @Field(type => Int, { nullable: false, description: "用户 ID" })
    user_id: number;

    @Column()
    @Field(type => Int, { nullable: false, description: "职位 ID" })
    position_id: number;

    @Column()
    @Field(type => Int, { nullable: false, description: "简历 ID" })
    resume_id: number;

    @Column()
    @Field(type => ApplyState, { nullable: false, description: "投递状态" })
    state: ApplyState;

    @Column()
    @Field(type => Date, { nullable: true, description: "创建时间" })
    created_at: Date;

    @Column()
    @Field(type => Date, { nullable: true, description: "更新时间" })
    updated_at: Date;
}


@Entity()
export class Apply {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { nullable: false, description: "ID" })
    id: number;

    @Column()
    @Field(type => Int, { nullable: false, description: "用户 ID" })
    user_id: number;

    @Column()
    @Field(type => Int, { nullable: false, description: "职位 ID" })
    position_id: number;

    @Column()
    @Field(type => Int, { nullable: false, description: "简历 ID" })
    resume_id: number;

    @Column()
    @Field(type => ApplyState, { nullable: false, description: "投递状态" })
    state: ApplyState;

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