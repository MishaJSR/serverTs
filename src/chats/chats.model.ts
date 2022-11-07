import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { fontsMessage } from "src/fonts-message/fontsMessage.model";
import { Messages } from "src/messages/messages.model";
import { User } from "src/users/users.model";

interface ChatCreationAttr {
    one_id: number;
    two_id: number;
}

@Table({tableName: 'chat'})
export class Chats extends Model<Chats, ChatCreationAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Мой пост', description: 'Текст поста'})
    @Column({type: DataType.STRING, allowNull: true})
    checkUpdate: string;

    @ApiProperty({example: 'Первый айди', description: ''})
    @Column({type: DataType.INTEGER, allowNull: false})
    @ForeignKey(() => User)
    one_id: number;

    @ApiProperty({example: 'Второй айди', description: ''})
    @Column({type: DataType.INTEGER, allowNull: true})
    @ForeignKey(() => User)
    two_id: number;

    @BelongsTo(() => User, 'one_id') oneID: User;
    @BelongsTo(() => User, 'two_id') twoID: User;

    @HasMany(() => Messages)
    messages: Messages[]

    @HasMany(() => fontsMessage)
    fontsMessage: fontsMessage[]

}