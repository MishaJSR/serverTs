import { deleteuserPhotosDto } from './dto/delete.userPhotos.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { userPhotos } from './userPhotos.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class userPhotosService {
    constructor(@InjectModel(userPhotos) private userPhotosRepository: typeof userPhotos,
    private fileService: FilesService){

    }

    async createUser(user_id: number, photo: any){
        const fileName = await this.fileService.createFile(photo);
        const post = await this.userPhotosRepository.create({user_id, photo: fileName});
        return post;
    }

    async createUserAva(user_id: number, filename: any, isAva: boolean){
        const post = await this.userPhotosRepository.create({user_id, photo: filename, isAva: isAva});
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
