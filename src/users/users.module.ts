import { Users, UsersSchema } from './schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { Gifts, GiftsSchema } from './schemas/gifts.schema';


@Module({
    imports: [
        MongooseModule.forFeature([{name: Users.name, schema: UsersSchema}]),
        MongooseModule.forFeature([{name: Gifts.name, schema: GiftsSchema}]),
    ],
    controllers: [UsersController],
    providers: [UsersService]
})

export class UsersModule {}
