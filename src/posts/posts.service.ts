import { CreateComentsDto } from './dto/coments.dto';
import { PostsDocument } from './schemas/posts.schema';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from 'mongoose';
import { Posts } from './schemas/posts.schema';
import { Coments, ComentsDocument } from './schemas/coments.schema';
import { Likes, LikesDocument } from './schemas/likes.schema';
import { CreatePostsDto } from './dto/posts.dto';
import { CreateLikesDto } from './dto/likes.dto';


@Injectable()
export class PostsService{

    constructor(
                @InjectModel(Posts.name) private postsModel: Model<PostsDocument>,
                @InjectModel(Coments.name) private comentsModel: Model<ComentsDocument>,
                @InjectModel(Likes.name) private likesModel: Model<LikesDocument>,
                ) {}


    async getAll(): Promise<Posts[]>{
    const posts = await this.postsModel.find().populate('coments')
         return posts
    }

    async create(dto: CreatePostsDto): Promise<Posts>{
        const posts = await this.postsModel.create({...dto})
        return posts
    }

    async getOne(id: ObjectId): Promise<Posts>{
        const posts = await this.postsModel.findById(id).populate('coments')
        return posts
    }



    async deletePost(id: ObjectId): Promise<ObjectId>{
        const posts = await this.postsModel.findByIdAndDelete(id);
        return posts.id
    }


    async addLikes(dto: CreateLikesDto): Promise<Likes>{
        const posts = await this.postsModel.findById(dto.postId);
        const likes = await this.likesModel.create({...dto})
        posts.likes.push(likes._id)
        await posts.save();
        return likes
    }

    async deleteLikes(id: ObjectId): Promise<ObjectId>{
        const likes = await this.postsModel.findByIdAndDelete(id);
        return likes.id
    }

    async addComents(dto: CreateComentsDto): Promise<Coments>{
        const posts = await this.postsModel.findById(dto.postId);
        const coments = await this.comentsModel.create({...dto})
        posts.coments.push(coments._id)
        await posts.save();
        return coments
    }

    async deleteComents(id: ObjectId): Promise<ObjectId>{
        const coments = await this.postsModel.findByIdAndDelete(id);
        return coments.id
    }


    


}