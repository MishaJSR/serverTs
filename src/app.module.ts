import { UsersService } from './users/users.service';
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FollowersModule } from './followers/followers.module';
import { ChatsModule } from './chats/chats.module';
import { Chats } from './chats/chats.model';
import { Messages } from './messages/messages.model';
import { MessagesModule } from './messages/messages.module';
import { Genders } from './genders/genders.model';
import { GendersModule } from './genders/genders.module';
import { userPhotosModule } from './userPhotos/userPhotos.module';
import { userPhotos } from './userPhotos/userPhotos.model';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path'
import { genderPhotosModule } from './genderPhotos/genderPhotos.module';
import { genderPhotos } from './genderPhotos/genderPhotos.model';
import { FontsMessageModule } from './fonts-message/fonts-message.module';
import { fontsMessage } from './fonts-message/fontsMessage.model';


@Module({
    controllers:[],
    providers: [],
    imports: [
        ConfigModule.forRoot({
envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
          }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Chats, Messages, Genders, userPhotos, genderPhotos, fontsMessage],
            autoLoadModels: true

        }),
        UsersModule,
        AuthModule,
        FollowersModule,
        ChatsModule,
        MessagesModule,
        GendersModule,
        userPhotosModule,
        FilesModule,
        genderPhotosModule,
        FontsMessageModule
    ]
})
export class AppModule {}