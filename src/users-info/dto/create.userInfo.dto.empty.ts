import { ApiProperty } from "@nestjs/swagger";

export class createInfoUserDtoEmpty {
    

    @ApiProperty({example: 'status', description: 'status user'})
    readonly status: string;

    @ApiProperty({example: '/ava', description: 'ava пользователя'})
    readonly ava: string;

    @ApiProperty({example: 'false', description: 'Online пользователя'})
    readonly isOnline: boolean;
}