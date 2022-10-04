import { ApiProperty } from "@nestjs/swagger";

export class createGendersDto {
    
    @ApiProperty({example: '14', description: 'айли того кто добавляет пост'})
    readonly user_id: number;

    @ApiProperty({example: '31', description: 'айти того, чей пост'})
    readonly name_gender: string;

}