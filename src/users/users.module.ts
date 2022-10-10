
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model';
import { Posts } from 'src/posts/posts.model';
import { Chats } from 'src/chats/chats.model';
import { Genders } from 'src/genders/genders.model';
import { FilesModule } from 'src/files/files.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Posts, Chats, Genders]),
    FilesModule
    ],
   exports: [UsersService]
})
export class UsersModule {}
