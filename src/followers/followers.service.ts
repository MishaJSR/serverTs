import { deleteFollDto } from './dto/delete.follow.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createFollDto } from './dto/create.follow.dto';
import { Follow } from './follow.model';


@Injectable()
export class FollowService {
    constructor(@InjectModel(Follow) private followRepository: typeof Follow){

    }

    async createFollInfo(dto: createFollDto){
        const follow = await this.followRepository.create(dto);
        return follow;
    }

    async deleteFollInfo(dto: deleteFollDto){
        const follow = await this.followRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return follow;
    }

    async getAllFoll(){
        const follow = await this.followRepository.findAll({include: {all: true}});
        return follow;
    }


    async getFollById(id) {
        const follow = await this.followRepository.findAll({where: {user_id: id}, include: {all: true}})
        return follow;
    }


}
