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
    


}