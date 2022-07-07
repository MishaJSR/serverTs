import { Users, UsersSchema } from './schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { Gifts, GiftsSchema } from './schemas/gifts.schema';
import { FileService } from 'src/file/file.service';
import { Friends, FriendsSchema } from './schemas/friends.schema';


@Module({
    imports: [
        MongooseModule.forFeature([{name: Users.name, schema: UsersSchema}]),
        MongooseModule.forFeature([{name: Gifts.name, schema: GiftsSchema}]),
        MongooseModule.forFeature([{name: Friends.name, schema: FriendsSchema}])
    ],
    controllers: [UsersController],
    providers: [UsersService, FileService]
})

export class UsersModule {}
