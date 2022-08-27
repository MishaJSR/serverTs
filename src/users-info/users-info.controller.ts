import { createInfoUserDto } from './dto/create.userInfo.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersInfoService } from './users-info.service';
import { deleteInfoUserDto } from './dto/delete.userInfo.dto';
import { UserInfo } from './users-info.model';

@ApiTags('Info')
@Controller('info')
export class UsersInfoController {
    constructor(private usersInfoService: UsersInfoService) {}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: UserInfo})
    @Post()
    createUserInfo(@Body() userDto: createInfoUserDto){
        return this.usersInfoService.createUserInfo(userDto)
    }

    @ApiOperation({summary: 'Удаление инфы пользователя'})
    @ApiResponse({status: 200})
    @Post('/delete')
    deleteUserInfo(@Body() deleteDto: deleteInfoUserDto){
        return this.usersInfoService.deleteUserInfo(deleteDto)
    }

    @ApiOperation({summary: 'Получение всей информации пользователей'})
    @ApiResponse({status: 200, type: [UserInfo]})
    @Get()
    getAllInfo() {
        return this.usersInfoService.getAllInfo()
    }
}