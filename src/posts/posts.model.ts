import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Coments } from "src/coments/coments.model";
import { User } from "src/users/users.model";

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

    @ApiProperty({example: 'Мой пост', description: 'Текст поста'})
    @Column({type: DataType.STRING, allowNull: true})
    text: string;

    @ApiProperty({example: '112', description: 'Указатель айди расположения поста'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    id_postiton: number;

    @BelongsTo(() => User)
    author: User

    @HasMany(() => Coments)
    coments: Coments[];
}