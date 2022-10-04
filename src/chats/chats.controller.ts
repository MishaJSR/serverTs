import { Body, Controller, Get, Post } from '@nestjs/common';
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
}