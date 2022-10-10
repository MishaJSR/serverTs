import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
    @UseInterceptors(FileInterceptor('photo'))
    create(@Body() user_id: number,
    @UploadedFile() photo){
        return this.userPhotosService.createUser(user_id, photo)
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
