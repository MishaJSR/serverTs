import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface InfoCreationAttr {
    status: string;
    user_id: number;
    ava: string;
    gender: string;
    isOnline: boolean;
}

@Table({tableName: 'usersInfo'})
export class UserInfo extends Model<UserInfo, InfoCreationAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'All OK', description: 'Status пользователя'})
    @Column({type: DataType.STRING, allowNull: true})
    status: string;

    @ApiProperty({example: '2', description: 'Указатель айди в таблице users'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    user_id: number;

    @ApiProperty({example: 'true', description: 'Онлайн пользователя'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isOnline: boolean;

    @ApiProperty({example: 'https:/dffdffdsf', description: 'Картинка пользователя'})
    @Column({type: DataType.STRING,  allowNull: true})
    ava: string;

    @ApiProperty({example: 'men', description: 'gender пользователя'})
    @Column({type: DataType.STRING,  allowNull: true})
    gender: string;
    
}