import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface PostCreationAttr {
    id_adder: number;
    id_postiton: number;
    text: string;
}

@Table({tableName: 'posts'})
export class Posts extends Model<Posts, PostCreationAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '21', description: 'Айди того кто добавил пост'})
    @Column({type: DataType.INTEGER, allowNull: false})
    id_adder: number;

    @ApiProperty({example: '51а1п13п1', description: 'Текст поста'})
    @Column({type: DataType.STRING, allowNull: true})
    text: string;

    @ApiProperty({example: '51а1п13п1', description: 'Указатель айди расположения поста'})
    @Column({type: DataType.INTEGER, allowNull: false})
    id_postiton: number;

}