import { fontsMessageService } from './fonts-message.service';
import { deletefontsPhotoDto } from './dto/delete.fontsPhoto.dto';
import { createfontsPhotoDto } from './dto/create.fontsPhoto.dto';
import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { fontsMessage } from './fontsMessage.model';

@ApiTags('Чаты')
@Controller('fontsPhoto')
export class FontsMessageController {
    constructor(private fontsMessageService: fontsMessageService,
       ) {}

    @ApiOperation({summary: 'Создание поста'})
    @ApiResponse({status: 200, type: fontsMessage})
    @Post()
    @UseInterceptors(FileInterceptor('photo_font'))
    create(@Body() userDto: createfontsPhotoDto,
    @UploadedFile() photo_font){
        return this.fontsMessageService.createUser(userDto, photo_font)
    }

    @ApiOperation({summary: 'Удаление поста'})
    @ApiResponse({status: 200})
    @Post('/delete')
    delete(@Body() deleteDto: deletefontsPhotoDto){
        return this.fontsMessageService.deleteUser(deleteDto)
    }

    @ApiOperation({summary: 'Удаление поста'})
    @ApiResponse({status: 200})
    @Post('/new')
    createUserNull(@Body() userDto: createfontsPhotoDto){
        return this.fontsMessageService.createUserNull(userDto, "")
    }

    @ApiOperation({summary: 'Получение всех постов'})
    @ApiResponse({status: 200, type: [fontsMessage]})
    @Get()
    getAll() {
        return this.fontsMessageService.getAllUsers()
    }
}