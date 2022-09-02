import { createLoginDto } from './dto/create.login.dto';
import { createUserDto } from './../users/dto/create.user.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() userDto: createLoginDto){
        return this.authService.login(userDto)
    }

    @Post('/registration')
    registration(@Body() userDto: createUserDto){
        return this.authService.registration(userDto)
    }

    @Get('/:token')
    getByToken(@Param('token') token: string){
        return this.authService.getByToken(token)
    }
}
