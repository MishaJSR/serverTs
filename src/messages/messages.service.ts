import { ChatsService } from './../chats/chats.service';
import { createCountMessageDto } from './dto/create.countmessages.dto copy';
import { deleteMessageDto } from './dto/delete.messages.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createMessageDto } from './dto/create.messages.dto';
import { Messages } from './messages.model';
import { Op } from 'sequelize';

@Injectable()
export class MessagesService {
    constructor(@InjectModel(Messages) private messagesRepository: typeof Messages,  private chatsService: ChatsService){

    }

    async createUser(dto: createMessageDto){
        const post = await this.messagesRepository.create(dto);
        const chat = await this.chatsService.getOneChatId(dto.id_List);
        return post;
    }

    async deleteUser(dto: deleteMessageDto){
        const post = await this.messagesRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return post;
    }

    async getAllUsers(){
        const post = await this.messagesRepository.findAll({order: [['createdAt', 'DESC']]});
        return post;
    }

    async setRead(id: number) {
        const mess = await this.messagesRepository.findByPk(id)
        mess.isRead = true;
        await mess.save();
        return mess;
    }

    async getUnreadMess(userDto: createCountMessageDto) {
        const post = await this.messagesRepository.findAll({
            where: {
                [Op.and]: [
                    { id_List: userDto.id_List },
                    { id_Adder: {[Op.ne]: userDto.id_Adder} },
                    { isRead: {[Op.ne]: true} }
                  ]
            }
        });
        return post.length;
    }

    
}
