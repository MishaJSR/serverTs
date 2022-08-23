import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Coments } from './coments.model';
import { createComentDto } from './dto/create.coment.dto';
import { deleteComentDto } from './dto/delete.coment.dto';

@Injectable()
export class ComentsService {
    constructor(@InjectModel(Coments) private comentsRepository: typeof Coments){

    }

    async createUser(dto: createComentDto){
        const coment = await this.comentsRepository.create(dto);
        return coment;
    }

    async deleteUser(dto: deleteComentDto){
        const coment = await this.comentsRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return coment;
    }

    async getAllUsers(){
        const coment = await this.comentsRepository.findAll();
        return coment;
    }
}
