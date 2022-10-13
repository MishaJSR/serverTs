import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {  MessagesService } from './messages.service';
import {  createMessageDto } from './dto/create.messages.dto';
import {  deleteMessageDto } from './dto/delete.messages.dto';
import { Messages } from './messages.model';

@ApiTags('Чаты')
@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {}

    @ApiOperation({summary: 'Создание поста'})
    @ApiResponse({status: 200, type: Messages})
    @Post()
    create(@Body() userDto: createMessageDto){
        return this.messagesService.createUser(userDto)
    }

    @ApiOperation({summary: 'Удаление поста'})
    @ApiResponse({status: 200})
    @Post('/delete')
    delete(@Body() deleteDto: deleteMessageDto){
        return this.messagesService.deleteUser(deleteDto)
    }

    @ApiOperation({summary: 'Получение всех постов'})
    @ApiResponse({status: 200, type: [Messages]})
    @Get()
    getAll() {
        return this.messagesService.getAllUsers()
    }
}