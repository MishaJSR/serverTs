import { createInfoUserDto } from './dto/create.userInfo.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserInfo } from './users-info.model';
import { deleteInfoUserDto } from './dto/delete.userInfo.dto';

@Injectable()
export class UsersInfoService {
    constructor(@InjectModel(UserInfo) private userInfoRepository: typeof UserInfo){

    }

    async createUserInfo(dto: createInfoUserDto){
        const info = await this.userInfoRepository.create(dto);
        return info;
    }

    async deleteUserInfo(dto: deleteInfoUserDto){
        const info = await this.userInfoRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return info;
    }

    async getAllInfo(){
        const info = await this.userInfoRepository.findAll({include: {all: true}});
        return info;
    }
}