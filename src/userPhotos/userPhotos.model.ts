import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Coments } from "src/coments/coments.model";
import { Messages } from "src/messages/messages.model";
import { User } from "src/users/users.model";

interface userPhotosCreationAttr {
    user_id: number;
    photo: string;
    isAva: boolean;
}

@Table({tableName: 'userPhotos'})
export class userPhotos extends Model<userPhotos, userPhotosCreationAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '112', description: 'Указатель айди расположения поста'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    user_id: number;

    @ApiProperty({example: 'Мой пост', description: 'Текст поста'})
    @Column({type: DataType.STRING, allowNull: true})
    photo: string;

    @ApiProperty({example: 'Мой пост', description: 'Текст поста'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isAva: boolean;

    @BelongsTo(() => User)
    author: User


    // @HasMany(() => Coments)
    // coments: Coments[];
}