import{ PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";

// 数据实体，对应数据库中的数据表
@Entity()
export class Cats {
    @PrimaryGeneratedColumn()     // 主键
    id: number;
    
    @Column({length: 45})         // 数据表中的列，字符串类型，限定长度 45
    name: string;

    @Column('int')                // 数据表中的列，int 类型，但在 TypeScript 中要写成 number 类型
    age: number;
}