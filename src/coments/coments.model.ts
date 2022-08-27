import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Posts } from "src/posts/posts.model";

interface ComentsCreationAttr {
    id_adder: number;
    id_post: number;
    text: string;
}

@Table({tableName: 'coments'})
export class Coments extends Model<Coments, ComentsCreationAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '21', description: 'Айди того кто добавляет комент'})
    @Column({type: DataType.INTEGER, allowNull: false})
    id_adder: number;

    @ApiProperty({example: '51а1п13п1', description: 'Текст комента'})
    @Column({type: DataType.STRING, allowNull: true})
    text: string;

    @ApiProperty({example: '51а1п13п1', description: 'Указатель айди расположения поста'})
    @ForeignKey(() => Posts)
    @Column({type: DataType.INTEGER, allowNull: false})
    id_post: number;

    @BelongsTo(() => Posts)
    author: Posts
}