import { setReadChatDto } from './dto/setRead.dto';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Chats } from './chats.model';
import { ChatsService } from './chats.service';
import { createChatDto } from './dto/create.chats.dto';
import { deleteChatDto } from './dto/delete.chats.dto';

@ApiTags('Чаты')
@Controller('chats')
export class ChatsController {
    constructor(private chatsService: ChatsService) {}

    @ApiOperation({summary: 'Создание поста'})
    @ApiResponse({status: 200, type: Chats})
    @Post()
    create(@Body() userDto: createChatDto){
        return this.chatsService.createUser(userDto)
    }

    @ApiOperation({summary: 'Удаление поста'})
    @ApiResponse({status: 200})
    @Post('/delete')
    delete(@Body() deleteDto: deleteChatDto){
        return this.chatsService.deleteUser(deleteDto)
    }

    @ApiOperation({summary: 'Получение всех постов'})
    @ApiResponse({status: 200, type: [Chats]})
    @Get()
    getAll() {
        return this.chatsService.getAllUsers()
    }

    @ApiOperation({summary: 'Получение всей информации о друзьях пользователя'})
    @ApiResponse({status: 200, type: [Chats]})
    @Get('/:id')
    getChatById(@Param('id') id: number) {
        return this.chatsService.getChatById(id);
    }


    @ApiOperation({summary: 'Получение всей информации о друзьях пользователя'})
    @ApiResponse({status: 200, type: [Chats]})
    @Get('/user/:id')
    getChatByUserId(@Param('id') id: number) {
        return this.chatsService.getChatByUserId(id);
    }


    @ApiOperation({summary: 'Получение всей информации о друзьях пользователя'})
    @ApiResponse({status: 200, type: [Chats]})
    @Post('/setRead')
    setAllRead(@Body() userDto: setReadChatDto) {
        return this.chatsService.setAllRead(userDto);
    }

    
}
