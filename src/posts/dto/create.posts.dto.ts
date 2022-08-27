import { ApiProperty } from "@nestjs/swagger";

export class createPostDto {
    
    @ApiProperty({example: '14', description: 'айли того кто добавляет пост'})
    readonly id_adder: number;

    @ApiProperty({example: '31', description: 'айти того, чей пост'})
    readonly id_postiton: number;

    @ApiProperty({example: '51а1п13п1', description: 'Текс поста'})
    readonly text: string;
}