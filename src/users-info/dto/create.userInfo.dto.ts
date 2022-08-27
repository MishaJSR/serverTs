import { ApiProperty } from "@nestjs/swagger";

export class createInfoUserDto {
    
    @ApiProperty({example: 'status', description: 'status user'})
    readonly status: string;

    @ApiProperty({example: '12', description: 'id пользователя'})
    readonly user_id: number;

    @ApiProperty({example: '/ava', description: 'ava пользователя'})
    readonly ava: string;

    @ApiProperty({example: 'men', description: 'gender пользователя'})
    readonly gender: string;

    @ApiProperty({example: 'false', description: 'Online пользователя'})
    readonly isOnline: boolean;
}