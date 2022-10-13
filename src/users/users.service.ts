import { Messages } from './../messages/messages.model';
import { userPhotos } from './../userPhotos/userPhotos.model';
import { userPhotosService } from './../userPhotos/userPhotos.service';
import { deleteUserDto } from './dto/delete.user.dto';
import { createUserDto } from './dto/create.user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { Injectable } from '@nestjs/common';
import { Chats } from 'src/chats/chats.model';
import { Genders } from 'src/genders/genders.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
    private fileService: FilesService, private userPhotosService: userPhotosService){

    }

    async createUser(dto: createUserDto){
        const user = await this.userRepository.create(dto);
        return user;
    }

    async createAva(id: number, photo: any){
        const fileName = await this.fileService.createFile(photo);
        const userph = await this.userPhotosService.createUserAva(id, fileName);
        const user = await this.userRepository.findByPk(id);
        user.ava = fileName;
        await user.save();
        return user;
    }

    async deleteUser(dto: deleteUserDto){
        const user = await this.userRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return user;
    }

    async getAllUsers(){
        const users = await this.userRepository.findAll({
            attributes: {exclude: ['password']},
            include: [{
              model: Chats, as: 'chats'
            },
              {
                model: Genders
              }],
              
          })
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne( {where: {email}})
        return user;
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOne({include: [
            {
              model: Genders
            },
            {
                model: userPhotos
              }],
            where: {id: id}})
        return user;
    }

}
