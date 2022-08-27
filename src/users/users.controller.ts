import { deleteUserDto } from './dto/delete.user.dto';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create.user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: createUserDto){
        return this.userService.createUser(userDto)
    }

    @ApiOperation({summary: 'Удаление пользователя'})
    @ApiResponse({status: 200})
    @Post('/delete')
    delete(@Body() deleteDto: deleteUserDto){
        return this.userService.deleteUser(deleteDto)
    }

    @ApiOperation({summary: 'Получение всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Get('/all')
    getAll() {
        return this.userService.getAllUsers()
    }
}
