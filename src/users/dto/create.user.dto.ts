import { ApiProperty } from "@nestjs/swagger";

export class createUserDto {
    
    @ApiProperty({example: 'mixan_4524@mail.ru', description: 'Почтовый адрес'})
    readonly email: string;

    @ApiProperty({example: '51а1п13п1', description: 'Пароль пользователя'})
    readonly password: string;

    @ApiProperty({example: 'men', description: 'gender пользователя'})
    readonly gender: string;

    @ApiProperty({example: 'Оксана', description: 'имя пользователя'})
    readonly name: string;
}