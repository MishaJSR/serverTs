import { ApiProperty } from "@nestjs/swagger";

export class setReadChatDto {
    
    @ApiProperty({example: '14', description: 'айли того кто добавляет пост'})
    readonly id_List: number;

    @ApiProperty({example: '31', description: 'айти того, чей пост'})
    readonly id_Adder: number;

}