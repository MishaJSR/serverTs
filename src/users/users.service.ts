import { UsersInfoService } from './../users-info/users-info.service';
import { deleteUserDto } from './dto/delete.user.dto';
import { createUserDto } from './dto/create.user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
    private userInfoService: UsersInfoService){

    }

    async createUser(dto: createUserDto){
        const user = await this.userRepository.create(dto);
        const userInfo = await this.userInfoService.logincreateUserInfo(user.id, user.gender, {status: "Status", ava: "http", isOnline: false});
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
        const users = await this.userRepository.findAll();
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}})
        return user;
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOne({where: {id: id}})
        return user;
    }

}
