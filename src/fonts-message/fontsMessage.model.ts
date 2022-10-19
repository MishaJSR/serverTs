import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Chats } from "src/chats/chats.model";
import { Genders } from "src/genders/genders.model";

interface fontsMessageCreationAttr {
    id_Chat: number;
    photo_font: string;
}

@Table({tableName: 'fontsMessage'})
export class fontsMessage extends Model<fontsMessage, fontsMessageCreationAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '112', description: 'Указатель айди расположения поста'})
    @ForeignKey(() => Chats)
    @Column({type: DataType.INTEGER, allowNull: false})
    id_Chat: number;

    
    @Column({type: DataType.STRING, allowNull: true})
    photo_font: string;


    @BelongsTo(() => Chats)
    chats: Chats

    // @HasMany(() => Coments)
    // coments: Coments[];
}