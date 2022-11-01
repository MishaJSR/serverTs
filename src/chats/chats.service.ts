import { Messages } from './../messages/messages.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { fontsMessageService } from 'src/fonts-message/fonts-message.service';
import { Chats } from './chats.model';
import {  createChatDto } from './dto/create.chats.dto';
import {  deleteChatDto } from './dto/delete.chats.dto';
import { User } from 'src/users/users.model';

@Injectable()
export class ChatsService {
    constructor(@InjectModel(Chats) private chatRepository: typeof Chats, private fontsMessageService: fontsMessageService){

    }

    async createUser(dto: createChatDto){
        const post = await this.chatRepository.create(dto);
        const font = await this.fontsMessageService.createUserNull({id_Chat: post.id}, "");
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
        const user = await this.chatRepository.findAll({include: [{
              model: Messages,
              as: 'messages', 
            },
            {
                model: User,
                as: 'oneID', 
              },
              {
                model: User,
                as: 'twoID', 
              },
        ],
            order: [['messages','createdAt', 'ASC']],
            where: {id: id}})
        return user;
    }
    
    async getChatByUserId(id: number) {
        const user = await this.chatRepository.findAll({include: {all: true}, where: {
            [Op.or]: [{one_id: id}, {two_id: id}]
          }})
        return user;
    }
    
    
}
