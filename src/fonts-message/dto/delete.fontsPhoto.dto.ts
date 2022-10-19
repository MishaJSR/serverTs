import { ApiProperty } from "@nestjs/swagger";

export class deletefontsPhotoDto {
    @ApiProperty({example: '142', description: 'Айди для удаления поста'})
    readonly id_delete: number;
}