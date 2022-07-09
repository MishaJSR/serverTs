import { CreateComentsDto } from './dto/coments.dto';
import { PostsService,} from './posts.service';
import { Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import { ObjectId } from 'mongoose';
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


    @Delete('/:id')
    deletePost(@Param('id')id: ObjectId){
        return this.postsService.deletePost(id)
    }

    

    @Post('/likes')
    addLikes(@Body() dto: CreateLikesDto){
        return this.postsService.addLikes(dto)
    }

    @Delete('/likes/:id')
    deleteLikes(@Param('id')id: ObjectId){
        return this.postsService.deleteLikes(id)
    }

    @Post('/coments')
    addComents(@Body() dto: CreateComentsDto){
        return this.postsService.addComents(dto)
    }

    @Delete('/coments/:id')
    deleteComents(@Param('id')id: ObjectId){
        return this.postsService.deleteComents(id)
    }
    

}