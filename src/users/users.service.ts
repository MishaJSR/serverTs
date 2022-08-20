import { createUserDto } from './dto/create.user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepostiory: typeof User){

    }

    async createUser(dto: createUserDto){
        const user = await this.userRepostiory.create(dto);
        return user;
    }

    async getAllUsers(){
        const users = await this.userRepostiory.findAll();
        return users;
    }
}
