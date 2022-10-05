import { deleteuserPhotosDto } from './dto/delete.userPhotos.dto';
import { createuserPhotosDto } from './dto/create.userPhotos.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { userPhotos } from './userPhotos.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class userPhotosService {
    constructor(@InjectModel(userPhotos) private userPhotosRepository: typeof userPhotos,
    private fileService: FilesService){

    }

    async createUser(dto: createuserPhotosDto, image: any){
        const fileName = this.fileService.createFile(image);
        const post = await this.userPhotosRepository.create({...dto, image: fileName});
        return post;
    }

    async deleteUser(dto: deleteuserPhotosDto){
        const post = await this.userPhotosRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return post;
    }

    async getAllUsers(){
        const post = await this.userPhotosRepository.findAll()
        return post;
    }
}
