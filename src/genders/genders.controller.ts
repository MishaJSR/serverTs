import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GendersService } from './genders.service';
import { createGendersDto } from './dto/create.genders.dto';
import { deleteGendersDto } from './dto/delete.genders.dto';
import { Genders } from './genders.model';

@ApiTags('Чаты')
@Controller('genders')
export class GendersController {
    constructor(private gendersService: GendersService) {}

    @ApiOperation({summary: 'Создание поста'})
    @ApiResponse({status: 200, type: Genders})
    @Post()
    create(@Body() userDto: createGendersDto){
        return this.gendersService.createUser(userDto)
    }

    @ApiOperation({summary: 'Удаление поста'})
    @ApiResponse({status: 200})
    @Post('/delete')
    delete(@Body() deleteDto: deleteGendersDto){
        return this.gendersService.deleteUser(deleteDto)
    }

    @ApiOperation({summary: 'Получение всех постов'})
    @ApiResponse({status: 200, type: [Genders]})
    @Get()
    getAll() {
        return this.gendersService.getAllUsers()
    }
}
