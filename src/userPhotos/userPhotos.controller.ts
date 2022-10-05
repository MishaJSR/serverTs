import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createuserPhotosDto } from './dto/create.userPhotos.dto';
import { deleteuserPhotosDto } from './dto/delete.userPhotos.dto';
import { userPhotos } from './userPhotos.model';
import { userPhotosService } from './userPhotos.service';


@ApiTags('Чаты')
@Controller('userPhotos')
export class userPhotosController {
    constructor(private userPhotosService: userPhotosService) {}

    @ApiOperation({summary: 'Создание поста'})
    @ApiResponse({status: 200, type: userPhotos})
    @Post()
    create(@Body() userDto: createuserPhotosDto){
        return this.userPhotosService.createUser(userDto)
    }

    @ApiOperation({summary: 'Удаление поста'})
    @ApiResponse({status: 200})
    @Post('/delete')
    delete(@Body() deleteDto: deleteuserPhotosDto){
        return this.userPhotosService.deleteUser(deleteDto)
    }

    @ApiOperation({summary: 'Получение всех постов'})
    @ApiResponse({status: 200, type: [userPhotos]})
    @Get()
    getAll() {
        return this.userPhotosService.getAllUsers()
    }
}
