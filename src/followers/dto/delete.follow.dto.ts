import { ApiProperty } from "@nestjs/swagger";

export class deleteFollDto {
    @ApiProperty({example: '142', description: 'Айди для удаления пользователя'})
    readonly id_delete: number;
}