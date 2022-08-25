import { deleteUserDto } from './dto/delete.user.dto';
import { createUserDto } from './dto/create.user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private postsRepository: typeof User){

    }

    async createUser(dto: createUserDto){
        const user = await this.postsRepository.create(dto);
        return user;
    }

    async deleteUser(dto: deleteUserDto){
        const user = await this.postsRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return user;
    }

    async getAllUsers(){
        const users = await this.postsRepository.findAll({include: {all: true}});
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.postsRepository.findOne({where: {email}, include: {all: true}})
        return user;
    }

}
