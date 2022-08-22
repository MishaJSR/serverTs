import { PostsService } from './posts.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Posts } from './posts.model';
import { createPostDto } from './dto/create.posts.dto';
import { deletePostDto } from './dto/delete.posts.dto';

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: Posts})
    @Post()
    create(@Body() userDto: createPostDto){
        return this.postService.createUser(userDto)
    }

    @ApiOperation({summary: 'Удаление пользователя'})
    @ApiResponse({status: 200})
    @Post('/delete')
    delete(@Body() deleteDto: deletePostDto){
        return this.postService.deleteUser(deleteDto)
    }

    @ApiOperation({summary: 'Получение всех пользователей'})
    @ApiResponse({status: 200, type: [Posts]})
    @Get()
    getAll() {
        return this.postService.getAllUsers()
    }
}
