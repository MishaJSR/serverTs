import { deleteuserPhotosDto } from './dto/delete.userPhotos.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { userPhotos } from './userPhotos.model';
import { FilesService } from 'src/files/files.service';
import { createuserPhotosDto } from './dto/create.userPhotos.dto';

@Injectable()
export class userPhotosService {
    constructor(@InjectModel(userPhotos) private userPhotosRepository: typeof userPhotos,
    private fileService: FilesService){

    }

    async createUser(dto: createuserPhotosDto, photo: any){
        const fileName = await this.fileService.createFile(photo);
        const post = await this.userPhotosRepository.create({...dto, photo: fileName});
        post.isAva = false;
        post.save();
        return post;
    }

    async createUserAva(user_id: number, filename: any){
        const user = await this.userPhotosRepository.findOne({ where: { isAva: true } })
        if (user) {
            user.isAva = false;
            await user.save();
            const post = await this.userPhotosRepository.create({user_id, photo: filename});
            post.isAva = true;
            await post.save();
            return post;
        } else {
            const post = await this.userPhotosRepository.create({user_id, photo: filename});
            post.isAva = true;
            await post.save();
            return post;
        }

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
