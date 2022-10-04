import { deleteMessageDto } from './dto/delete.messages.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createMessageDto } from './dto/create.messages.dto';
import { Messages } from './messages.model';

@Injectable()
export class MessagesService {
    constructor(@InjectModel(Messages) private messagesRepository: typeof Messages){

    }

    async createUser(dto: createMessageDto){
        const post = await this.messagesRepository.create(dto);
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
        const post = await this.messagesRepository.findAll();
        return post;
    }
}
