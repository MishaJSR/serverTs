import { setReadChatDto } from './dto/setRead.dto';
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

    async setAllRead(dto: setReadChatDto){
        const post = await this.chatRepository.findAll({
            include: {
                model: Messages, 
                where: {
                    [Op.and]: [
                    {isRead: false},
                    {id_Adder: {[Op.ne]: dto.id_Adder}}
                ]}
          },
        where: {id: dto.id_List}
    })
        post[0].messages.map((e) => {e.isRead = true; e.save()})
        return post;
    }

    async getChatById(id: number) {
        const user = await this.chatRepository.findAll({include: {all: true},
            order: [['messages','createdAt', 'ASC']],
            where: {id: id}})
        return user;
    }
    
    async getChatByUserId(id: number) {
        const user = await this.chatRepository.findAll({include: {all: true},
            order: [['updatedAt','DESC']],
            where: {
            [Op.or]: [{one_id: id}, {two_id: id}]
          }})
        return user;
    }

    async getOneChatId(id: number) {
        const user = await this.chatRepository.findByPk(id);
        user.checkUpdate = "ssds";
        await user.save();
        return user;
    }
    
    
}
