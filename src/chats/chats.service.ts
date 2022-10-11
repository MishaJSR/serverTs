import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Messages } from 'src/messages/messages.model';
import { Chats } from './chats.model';
import {  createChatDto } from './dto/create.chats.dto';
import {  deleteChatDto } from './dto/delete.chats.dto';

@Injectable()
export class ChatsService {
    constructor(@InjectModel(Chats) private chatRepository: typeof Chats){

    }

    async createUser(dto: createChatDto){
        const post = await this.chatRepository.create(dto);
        return post;
    }

    async deleteUser(dto: deleteChatDto){
        const post = await this.chatRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return post;
    }

    async getAllUsers(){
        const post = await this.chatRepository.findAll({
            include: {all: true}
          })
        return post;
    }

    async getChatById(id: number) {
        const user = await this.chatRepository.findAll({include: {all: true},where: {
            [Op.or]: [{one_id: id}, {two_id: id}]
          }})
        return user;
    }
    
}
