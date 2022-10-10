import { deleteUserDto } from './dto/delete.user.dto';
import { createUserDto } from './dto/create.user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { Injectable } from '@nestjs/common';
import { Posts } from 'src/posts/posts.model';
import { Chats } from 'src/chats/chats.model';
import { Genders } from 'src/genders/genders.model';
import { userPhotos } from 'src/userPhotos/userPhotos.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
    private fileService: FilesService){

    }

    async createUser(dto: createUserDto){
        const user = await this.userRepository.create(dto);
        return user;
    }

    async createAva(id: number, photo: string){
        const fileName = await this.fileService.createFile(photo);
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
            include: [{
              model: Chats
            },
            {
                model: Posts
              },
              {
                model: userPhotos
              },
              {
                model: Genders
              }]
          })
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne( {where: {email}})
        return user;
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOne({include: {all: true},where: {id: id}})
        return user;
    }

}
