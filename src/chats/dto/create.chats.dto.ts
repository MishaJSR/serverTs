import { ApiProperty } from "@nestjs/swagger";

export class createChatDto {
    
    @ApiProperty({example: '14', description: 'айли того кто добавляет пост'})
    readonly one_id: number;

    @ApiProperty({example: '31', description: 'айти того, чей пост'})
    readonly two_id: number;

}