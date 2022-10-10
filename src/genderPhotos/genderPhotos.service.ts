import { deletegenderPhotosDto } from './dto/delete.genderPhotos.dto';
import { creategenderPhotosDto } from './dto/create.genderPhotos.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { genderPhotos } from './genderPhotos.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class genderPhotosService {
    constructor(@InjectModel(genderPhotos) private genderPhotosRepository: typeof genderPhotos,
    private fileService: FilesService){

    }

    async createUser(dto: creategenderPhotosDto, photo_gender: any){
        const fileName = await this.fileService.createFile(photo_gender);
        const post = await this.genderPhotosRepository.create({...dto, photo_gender: fileName});
        return post;
    }
    

    async deleteUser(dto: deletegenderPhotosDto){
        const post = await this.genderPhotosRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return post;
    }

    async getAllUsers(){
        const post = await this.genderPhotosRepository.findAll()
        return post;
    }
}
