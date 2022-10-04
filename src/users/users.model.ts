import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Chats } from "src/chats/chats.model";
import { Posts } from "src/posts/posts.model";

interface UserCreationAttr {
    email: string;
    password: string;
    gender: string;
    name: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'mixan_4524@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '51а1п13п1', description: 'Пароль пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'Andrey', description: 'Имя пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: 'Andrey', description: 'Гендер пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    gender: string;

    @ApiProperty({example: 'Andrey', description: 'AVA пользователя'})
    @Column({type: DataType.STRING, defaultValue: ""})
    ava: string;


    @HasMany(() => Posts)
    posts: Posts[];

    @HasMany(() => Chats)
    chats: Chats[];
}