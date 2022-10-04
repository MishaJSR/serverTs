import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Coments } from "src/coments/coments.model";
import { Messages } from "src/messages/messages.model";
import { User } from "src/users/users.model";

interface GendersCreationAttr {
    user_id: number;
    name_gender: string;
}

@Table({tableName: 'genders'})
export class Genders extends Model<Genders, GendersCreationAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '112', description: 'Указатель айди расположения поста'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    user_id: number;

    @ApiProperty({example: 'Мой пост', description: 'Текст поста'})
    @Column({type: DataType.STRING, allowNull: true})
    name_gender: string;

    @BelongsTo(() => User)
    author: User


    // @HasMany(() => Coments)
    // coments: Coments[];
}