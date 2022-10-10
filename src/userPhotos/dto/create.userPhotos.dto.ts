import { ApiProperty } from "@nestjs/swagger";

export class createuserPhotosDto {
    
    @ApiProperty({example: '14', description: 'айли того кто добавляет пост'})
    readonly user_id: number;

}