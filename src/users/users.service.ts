import { FileService, FileType } from './../file/file.service';
import { CreateUsersDto } from './dto/users.dto';
import { Gifts, GiftsDocument } from './schemas/gifts.schema';
import { Users, UsersDocument } from './schemas/users.schema';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from 'mongoose';
import { CreateGiftsDto } from './dto/gifts.dto';
import { Friends, FriendsDocument } from './schemas/friends.schema';
import { CreateFriendsDto } from './dto/fiends.dto';


@Injectable()
export class UsersService{

    constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>,
                @InjectModel(Gifts.name) private giftsModel: Model<GiftsDocument>,
                @InjectModel(Friends.name) private friendsModel: Model<FriendsDocument>,
                private fileService: FileService) {}

    async create(dto: CreateUsersDto, picture, audio): Promise<Users>{
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
        const users = await this.usersModel.create({...dto, status: 'Empty status', about: 'Nothing', isAuth: false, picture: picturePath, audio: audioPath})
        return users
    }
    async getAll(): Promise<Users[]>{
        const users = await this.usersModel.find().populate('friends')
        return users.friends[]
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

    async deleteGift(id: ObjectId): Promise<ObjectId>{
        const gifts = await this.giftsModel.findByIdAndDelete(id);
        return gifts.id
    }

    async addFriend(dto: CreateFriendsDto): Promise<Friends>{
        const users = await this.usersModel.findById(dto.userId);
        const friends = await this.friendsModel.create({...dto})
        users.friends.push(friends._id)
        await users.save();
        return friends
    }

}