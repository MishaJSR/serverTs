import { Likes, LikesSchema } from './schemas/likes.schema';
import { PostsSchema } from './schemas/posts.schema';
import { Posts } from './schemas/posts.schema';
import { Users, UsersSchema } from './schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { Gifts, GiftsSchema } from './schemas/gifts.schema';
import { FileService } from 'src/file/file.service';
import { Friends, FriendsSchema } from './schemas/friends.schema';
import { Coments, ComentsSchema } from './schemas/coments.schema';


@Module({
    imports: [
        MongooseModule.forFeature([{name: Users.name, schema: UsersSchema}]),
        MongooseModule.forFeature([{name: Gifts.name, schema: GiftsSchema}]),
        MongooseModule.forFeature([{name: Friends.name, schema: FriendsSchema}]),
        MongooseModule.forFeature([{name: Posts.name, schema: PostsSchema}]),
        MongooseModule.forFeature([{name: Coments.name, schema: ComentsSchema}]),
        MongooseModule.forFeature([{name: Likes.name, schema: LikesSchema}])
            
    ],
    controllers: [UsersController],
    providers: [UsersService, FileService]
})

export class UsersModule {}
