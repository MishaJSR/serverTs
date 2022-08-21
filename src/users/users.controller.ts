import { deleteUserDto } from './dto/delete.user.dto';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create.user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post()
    create(@Body() userDto: createUserDto){
        return this.userService.createUser(userDto)
    }

    @Post('/delete')
    delete(@Body() deleteDto: deleteUserDto){
        return this.userService.deleteUser(deleteDto)
    }

    @Get()
    getAll() {
        return this.userService.getAllUsers()
    }
}
