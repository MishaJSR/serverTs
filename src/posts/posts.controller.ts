import { PostsService,} from './posts.service';
import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { ObjectId } from 'mongoose';
import { FileFieldsInterceptor} from '@nestjs/platform-express';
import { CreatePostsDto } from './dto/posts.dto';
import { CreateLikesDto } from './dto/likes.dto';

@Controller('/posts')
export class PostsController{
    constructor(private postsService: PostsService){}


    @Get()
    getAll(){
        return this.postsService.getAll()
    }

    @Post()
    create(@Body() dto: CreatePostsDto){
        return this.postsService.create(dto)
    }

    // @Get(':id')
    // getOne(@Param('id') id: ObjectId){
    //     return this.usersService.getOne(id)
    // }

    // @Delete(':id')
    // delete(@Param('id')id: ObjectId){
    //     return this.usersService.delete(id)
    // }

    // @Post('/gifts')
    // addGift(@Body() dto: CreateGiftsDto){
    //     return this.usersService.addGift(dto)
    // }

    // @Delete('/gifts/:id')
    // deleteGift(@Param('id')id: ObjectId){
    //     return this.usersService.deleteGift(id)
    // }

    // @Post('/friends')
    // addFriend(@Body() dto: CreateFriendsDto){
    //     return this.usersService.addFriend(dto)
    // }

    // @Post('/posts')
    // addPost(@Body() dto: CreatePostsDto){
    //     return this.usersService.addPost(dto)
    // }

    // @Delete('/posts/:id')
    // deletePost(@Param('id')id: ObjectId){
    //     return this.usersService.deletePost(id)
    // }

    

    // @Post('/likes')
    // addLikes(@Body() dto: CreateLikesDto){
    //     return this.usersService.addLikes(dto)
    // }

}