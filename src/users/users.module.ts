import { userPhotos } from 'src/userPhotos/userPhotos.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model';
import { Chats } from 'src/chats/chats.model';
import { Genders } from 'src/genders/genders.model';
import { FilesModule } from 'src/files/files.module';
import { userPhotosModule } from 'src/userPhotos/userPhotos.module';
import { Messages } from 'src/messages/messages.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Chats, Genders, userPhotos, Messages]),
    FilesModule, userPhotosModule
    ],
   exports: [UsersService]
})
export class UsersModule {}
