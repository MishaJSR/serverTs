import { ApiProperty } from "@nestjs/swagger";

export class creategenderPhotosDto {
    
    @ApiProperty({example: '14', description: 'айли того кто добавляет пост'})
    readonly gender_id: number;

}