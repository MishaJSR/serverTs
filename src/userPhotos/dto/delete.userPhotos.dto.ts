import { ApiProperty } from "@nestjs/swagger";

export class deleteuserPhotosDto {
    @ApiProperty({example: '142', description: 'Айди для удаления поста'})
    readonly id_delete: number;
}