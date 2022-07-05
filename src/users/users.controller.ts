import { CreateUsersDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ObjectId } from 'mongoose';
import { CreateGiftsDto } from './dto/gifts.dto';

@Controller('/users')
export class UsersController{
    constructor(private usersService: UsersService){}

    @Post()
    create(@Body() dto: CreateUsersDto){
        return this.usersService.create(dto)
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

}