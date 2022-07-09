import { CreateUsersDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { ObjectId } from 'mongoose';
import { CreateGiftsDto } from './dto/gifts.dto';
import { FileFieldsInterceptor} from '@nestjs/platform-express';
import { CreateFriendsDto } from './dto/fiends.dto';

@Controller('/users')
export class UsersController{
    constructor(private usersService: UsersService){}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 }
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateUsersDto){
        const {picture} = files
        return this.usersService.create(dto, picture[0])
    }

    @Get()
    getAll(){
        return this.usersService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId){
        return this.usersService.getOne(id)
    }

    @Delete(':id')
    delete(@Param('id')id: ObjectId){
        return this.usersService.delete(id)
    }

    @Post('/gifts')
    addGift(@Body() dto: CreateGiftsDto){
        return this.usersService.addGift(dto)
    }

    @Delete('/gifts/:id')
    deleteGift(@Param('id')id: ObjectId){
        return this.usersService.deleteGift(id)
    }

    @Post('/friends')
    addFriend(@Body() dto: CreateFriendsDto){
        return this.usersService.addFriend(dto)
    }

    @Delete('/friends/:id')
    deleteFriend(@Param('id')id: ObjectId){
        return this.usersService.deleteFriend(id)
    }
    


}