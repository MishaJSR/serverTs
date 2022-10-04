import { UserInfo } from './../users-info/users-info.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model';
import { Posts } from 'src/posts/posts.model';
import { UsersInfoModule } from 'src/users-info/users-info.module';
import { Chats } from 'src/chats/chats.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Posts, UserInfo, Chats]),
    UsersInfoModule
  ],
   exports: [UsersService]
})
export class UsersModule {}
