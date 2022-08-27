import { ApiProperty } from "@nestjs/swagger";

export class createFollDto {
    
    @ApiProperty({example: '14', description: 'id user'})
    readonly user_id: number;

    @ApiProperty({example: '31', description: 'id follow'})
    readonly foll_id: number;
}