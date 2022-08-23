import { ApiProperty } from "@nestjs/swagger";

export class createComentDto {
    
    @ApiProperty({example: '14', description: 'Почтовый адрес'})
    readonly id_adder: number;

    @ApiProperty({example: '31', description: 'Пароль пользователя'})
    readonly id_post: number;

    @ApiProperty({example: '51а1п13п1', description: 'Пароль пользователя'})
    readonly text: string;
}