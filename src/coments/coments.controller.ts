import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Coments } from './coments.model';
import { ComentsService } from './coments.service';
import { createComentDto } from './dto/create.coment.dto';
import { deleteComentDto } from './dto/delete.coment.dto';

@ApiTags('Coments')
@Controller('coments')
export class ComentsController {
    constructor(private comentsService: ComentsService) {}

    @ApiOperation({summary: 'Создание комента'})
    @ApiResponse({status: 200, type: Coments})
    @Post()
    create(@Body() userDto: createComentDto){
        return this.comentsService.createUser(userDto)
    }

    @ApiOperation({summary: 'Удаление комента'})
    @ApiResponse({status: 200})
    @Post('/delete')
    delete(@Body() deleteDto: deleteComentDto){
        return this.comentsService.deleteUser(deleteDto)
    }

    @ApiOperation({summary: 'Получение всех коментов'})
    @ApiResponse({status: 200, type: [Coments]})
    @Get()
    getAll() {
        return this.comentsService.getAllUsers()
    }
}