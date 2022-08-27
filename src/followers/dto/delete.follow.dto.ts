import { ApiProperty } from "@nestjs/swagger";

export class deleteFollDto {
    @ApiProperty({example: '142', description: 'Айди для удаления друга'})
    readonly id_delete: number;
}