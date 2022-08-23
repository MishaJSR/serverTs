import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Posts } from "src/posts/posts.model";

interface UserCreationAttr {
    email: string;
    password: string;
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
    @Column({type: DataType.STRING, allowNull: true})
    name: string;

    @ApiProperty({example: 'Visocky', description: 'Фамилия пользователя'})
    @Column({type: DataType.STRING, allowNull: true})
    surname: string;

    @ApiProperty({example: 'All OK', description: 'Статус пользователя'})
    @Column({type: DataType.STRING, allowNull: true})
    status: string;

    @ApiProperty({example: 'http:/images/32f23235r', description: 'Ссылка на фото пользователя'})
    @Column({type: DataType.STRING, allowNull: true})
    img: string;

    @ApiProperty({example: 'true', description: 'Онлайн пользователя'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isOnline: boolean;

    @HasMany(() => Posts)
    posts: Posts[];
}