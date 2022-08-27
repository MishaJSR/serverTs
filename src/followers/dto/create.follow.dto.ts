import { ApiProperty } from "@nestjs/swagger";

export class createFollDto {
    
    @ApiProperty({example: '14', description: 'Айди пользователя'})
    readonly user_id: number;

    @ApiProperty({example: '31', description: 'Айди друга пользователя'})
    readonly foll_id: number;
}