import { InputType, registerEnumType, ObjectType, Field, Int } from "@nestjs/graphql";

export enum Order {
    ASC = "ASC",
    DESC = "DESC"
}

registerEnumType(Order, { name: "Order", description: "排序顺序" })

export enum OrderItem {
    SALARY_MIN = "salary_min",
    SALARY_MAX = "salary_max",
    UPDATED_AT = "updated_at"
}

registerEnumType(OrderItem, { name: "OrderItem", description: "排序项" })

@ObjectType()
export class CommonAnalyzeItem {
    @Field(type => String, { nullable: false, description: "字段名" })
    name: string;

    @Field(type => Int, { nullable: false, description: '字段值' })
    value: number;
}