import { createfontsPhotoDto } from './dto/create.fontsPhoto.dto';
import { deletefontsPhotoDto } from './dto/delete.fontsPhoto.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { fontsMessage } from './fontsMessage.model';
import { ChatsService } from 'src/chats/chats.service';

@Injectable()
export class fontsMessageService {
    constructor(@InjectModel(fontsMessage) private fontsMessageRepository: typeof fontsMessage,
    private fileService: FilesService){

    }

    async createUser(dto: createfontsPhotoDto, photo_font: any){
        const fileName = await this.fileService.createFile(photo_font);
        const post = await this.fontsMessageRepository.create({...dto, photo_font: fileName});
        return post;
    }

    async createUserNull(dto: createfontsPhotoDto, photo_font: any){
        const post = await this.fontsMessageRepository.create({...dto, photo_font: photo_font});
        return post;
    }
    

    async deleteUser(dto: deletefontsPhotoDto){
        const post = await this.fontsMessageRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return post;
    }

    async getAllUsers(){
        const post = await this.fontsMessageRepository.findAll()
        return post;
    }
}