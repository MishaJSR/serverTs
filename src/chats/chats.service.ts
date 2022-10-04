import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Chats } from './chats.model';
import {  createChatDto } from './dto/create.chats.dto';
import {  deleteChatDto } from './dto/delete.chats.dto';

@Injectable()
export class ChatsService {
    constructor(@InjectModel(Chats) private postsRepository: typeof Chats){

    }

    async createUser(dto: createChatDto){
        const post = await this.postsRepository.create(dto);
        return post;
    }

    async deleteUser(dto: deleteChatDto){
        const post = await this.postsRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return post;
    }

    async getAllUsers(){
        const post = await this.postsRepository.findAll({include: {all: true}});
        return post;
    }
}
