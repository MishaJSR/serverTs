import { ApiProperty } from "@nestjs/swagger";

export class createfontsPhotoDto {
    
    @ApiProperty({example: '14', description: 'айли того кто добавляет пост'})
    readonly id_Chat: number;

}