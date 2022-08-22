import { ApiProperty } from "@nestjs/swagger";

export class deletePostDto {
    @ApiProperty({example: '142', description: 'Айди для удаления пользователя'})
    readonly id_delete: number;
}