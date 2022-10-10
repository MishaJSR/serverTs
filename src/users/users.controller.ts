import { deleteUserDto } from './dto/delete.user.dto';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create.user.dto';
import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { FileInterceptor } from '@nestjs/platform-express';

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

    @ApiOperation({summary: 'Создание поста'})
    @ApiResponse({status: 200, type: User})
    @Post('/createAva/:id')
    @UseInterceptors(FileInterceptor('photo'))
    createAva(@Param('id') id: number,
    @UploadedFile() photo){
        return this.userService.createAva(id, photo)
    }


    @ApiOperation({summary: 'Удаление пользователя'})
    @ApiResponse({status: 200})
    @Post('/delete')
    delete(@Body() deleteDto: deleteUserDto){
        return this.userService.deleteUser(deleteDto)
    }

    @ApiOperation({summary: 'Получение всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Get('')
    getAll() {
        return this.userService.getAllUsers()
    }

    @ApiOperation({summary: 'Получение всей информации о друзьях пользователя'})
    @ApiResponse({status: 200, type: [User]})
    @Get('/:id')
    getUserById(@Param('id') id: number) {
        return this.userService.getUserById(id);
    }

    
}
