import { ApiProperty } from "@nestjs/swagger";

export class deleteUserDto {
    @ApiProperty({example: '142', description: 'Айди для удаления пользователя'})
    readonly id_delete: number;
}