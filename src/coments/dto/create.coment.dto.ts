import { ApiProperty } from "@nestjs/swagger";

export class createComentDto {
    
    @ApiProperty({example: '14', description: 'Айди того кто добавляет комент'})
    readonly id_adder: number;

    @ApiProperty({example: '31', description: 'Айди комента'})
    readonly id_post: number;

    @ApiProperty({example: 'Привет бро', description: 'Текст комента'})
    readonly text: string;
}