import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Coments } from "src/coments/coments.model";
import { Genders } from "src/genders/genders.model";
import { Messages } from "src/messages/messages.model";
import { User } from "src/users/users.model";

interface genderPhotosCreationAttr {
    gender_id: number;
    photo_gender: string;
}

@Table({tableName: 'genderPhotos'})
export class genderPhotos extends Model<genderPhotos, genderPhotosCreationAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '112', description: 'Указатель айди расположения поста'})
    @ForeignKey(() => Genders)
    @Column({type: DataType.INTEGER, allowNull: false})
    gender_id: number;

    @ApiProperty({example: 'Мой пост', description: 'Текст поста'})
    @Column({type: DataType.STRING, allowNull: true})
    photo_gender: string;

    @BelongsTo(() => Genders)
    author: Genders


    // @HasMany(() => Coments)
    // coments: Coments[];
}