import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Coments } from "src/coments/coments.model";
import { User } from "src/users/users.model";

interface ChatCreationAttr {
    one_id: number;
    two_id: number;
}

@Table({tableName: 'chat'})
export class Chats extends Model<Chats, ChatCreationAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '112', description: 'Указатель айди расположения поста'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    one_id: number;

    @ApiProperty({example: 'Мой пост', description: 'Текст поста'})
    @Column({type: DataType.STRING, allowNull: true})
    two_id: number;



    @BelongsTo(() => User)
    author: User

    // @HasMany(() => Coments)
    // coments: Coments[];
}