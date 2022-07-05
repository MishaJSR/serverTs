import { Users, UsersSchema } from './schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { Gifts, GiftsSchema } from './schemas/gifts.schema';
import { FileService } from 'src/file/file.service';


@Module({
    imports: [
        MongooseModule.forFeature([{name: Users.name, schema: UsersSchema}]),
        MongooseModule.forFeature([{name: Gifts.name, schema: GiftsSchema}]),
    ],
    controllers: [UsersController],
    providers: [UsersService, FileService]
})

export class UsersModule {}
