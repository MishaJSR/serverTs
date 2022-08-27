import { deleteFollDto } from './dto/delete.follow.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createFollDto } from './dto/create.follow.dto';
import { Follow } from './follow.model';
import { FollowService } from './followers.service';


@ApiTags('Followers')
@Controller('follow')
export class FollowController {
    constructor(private followService: FollowService) {}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: Follow})
    @Post()
    createUserInfo(@Body() userDto: createFollDto){
        return this.followService.createFollInfo(userDto)
    }

    @ApiOperation({summary: 'Удаление инфы пользователя'})
    @ApiResponse({status: 200})
    @Post('/delete')
    deleteUserInfo(@Body() deleteDto: deleteFollDto){
        return this.followService.deleteFollInfo(deleteDto)
    }

    @ApiOperation({summary: 'Получение всей информации пользователей'})
    @ApiResponse({status: 200, type: [Follow]})
    @Get()
    getAllInfo() {
        return this.followService.getAllFoll()
    }

    @ApiOperation({summary: 'Получение всей информации пользователей'})
    @ApiResponse({status: 200, type: [Follow]})
    @Get('/:id')
    getByValue(@Param('id') id: number) {
        return this.followService.getFollById(id);
    }
}