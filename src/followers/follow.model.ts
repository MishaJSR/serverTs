import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface FolCreationAttr {
    user_id: number;
    foll_id: number;
}

@Table({tableName: 'follow'})
export class Follow extends Model<Follow, FolCreationAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '23', description: 'id пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    user_id: string;

    @ApiProperty({example: '14', description: 'друга пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    foll_id: string;

}