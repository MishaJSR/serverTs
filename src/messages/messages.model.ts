import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Chats } from "src/chats/chats.model";

interface MessagesCreationAttr {
    id_List: number;
    id_Adder: number;
    text: string
}

@Table({tableName: 'messages'})
export class Messages extends Model<Messages, MessagesCreationAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '112', description: 'Указатель айди расположения поста'})
    @ForeignKey(() => Chats)
    @Column({type: DataType.INTEGER, allowNull: false})
    id_List: number;

    @ApiProperty({example: 'Мой пост', description: 'Текст поста'})
    @Column({type: DataType.STRING, allowNull: true})
    id_Adder: number;

    
    @ApiProperty({example: 'Мой пост', description: 'Текст поста'})
    @Column({type: DataType.STRING, allowNull: true})
    text: string;


    @BelongsTo(() => Chats)
    chats: Chats

    // @HasMany(() => Coments)
    // coments: Coments[];
}