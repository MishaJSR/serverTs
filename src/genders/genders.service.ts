import { deleteGendersDto } from './dto/delete.genders.dto';
import { createGendersDto } from './dto/create.genders.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Genders } from './genders.model';
import { genderPhotos } from 'src/genderPhotos/genderPhotos.model';

@Injectable()
export class GendersService {
    constructor(@InjectModel(Genders) private gendersRepository: typeof Genders){

    }

    async createUser(dto: createGendersDto){
        const post = await this.gendersRepository.create(dto);
        return post;
    }

    async deleteUser(dto: deleteGendersDto){
        const post = await this.gendersRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return post;
    }

    async getAllUsers(){
        const post = await this.gendersRepository.findAll({            
            include: [{
              model: genderPhotos
            }]})
        return post;
    }
}
