import { CreateUsersDto } from './dto/users.dto';
import { Gifts, GiftsDocument } from './schemas/gifts.schema';
import { Users, UsersDocument } from './schemas/users.schema';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from 'mongoose';
import { CreateGiftsDto } from './dto/gifts.dto';


@Injectable()
export class UsersService{

    constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>,
                @InjectModel(Gifts.name) private giftsModel: Model<GiftsDocument>) {}

    async create(dto: CreateUsersDto): Promise<Users>{
        const users = await this.usersModel.create({...dto, status: 'Empty status', about: 'Nothing', isAuth: false})
        return users
    }
    async getAll(): Promise<Users[]>{
        const users = await this.usersModel.find()
        return users
    }
    async getOne(id: ObjectId): Promise<Users>{
        const users = await this.usersModel.findById(id).populate('gifts')
        return users
    }
    async delete(id: ObjectId): Promise<ObjectId>{
        const users = await this.usersModel.findByIdAndDelete(id);
        return users.id
    }

    async addGift(dto: CreateGiftsDto): Promise<Gifts>{
        const users = await this.usersModel.findById(dto.userId);
        const gifts = await this.giftsModel.create({...dto})
        users.gifts.push(gifts._id)
        await users.save();
        return gifts
    }

}