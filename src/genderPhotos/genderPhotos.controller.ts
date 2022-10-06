import { deletegenderPhotosDto } from './dto/delete.genderPhotos.dto';
import { creategenderPhotosDto } from './dto/create.genderPhotos.dto';
import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { genderPhotosService} from './genderPhotos.service';
import { genderPhotos } from './genderPhotos.model';


@ApiTags('Чаты')
@Controller('genderPhotos')
export class genderPhotosController {
    constructor(private genderPhotosService: genderPhotosService) {}

    @ApiOperation({summary: 'Создание поста'})
    @ApiResponse({status: 200, type: genderPhotos})
    @Post()
    @UseInterceptors(FileInterceptor('photo_gender'))
    create(@Body() userDto: creategenderPhotosDto,
    @UploadedFile() photo_gender){
        return this.genderPhotosService.createUser(userDto, photo_gender)
    }

    @ApiOperation({summary: 'Удаление поста'})
    @ApiResponse({status: 200})
    @Post('/delete')
    delete(@Body() deleteDto: deletegenderPhotosDto){
        return this.genderPhotosService.deleteUser(deleteDto)
    }

    @ApiOperation({summary: 'Получение всех постов'})
    @ApiResponse({status: 200, type: [genderPhotos]})
    @Get()
    getAll() {
        return this.genderPhotosService.getAllUsers()
    }
}
