import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createPostDto } from './dto/create.posts.dto';
import { deletePostDto } from './dto/delete.posts.dto';
import { Posts } from './posts.model';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Posts) private postsRepository: typeof Posts){

    }

    async createUser(dto: createPostDto){
        const post = await this.postsRepository.create(dto);
        return post;
    }

    async deleteUser(dto: deletePostDto){
        const post = await this.postsRepository.destroy({
            where: {
                id: dto.id_delete
            }
        });
        return post;
    }

    async getAllUsers(){
        const post = await this.postsRepository.findAll();
        return post;
    }
}
