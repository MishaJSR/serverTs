import { Module } from '@nestjs/common';
import { userPhotosService} from './userPhotos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { userPhotos} from './userPhotos.model';
import { User } from 'src/users/users.model';
import {  userPhotosController } from './userPhotos.controller';
import { FilesModule } from 'src/files/files.module';
import { UsersModule } from 'src/users/users.module';


@Module({
  providers: [userPhotosService],
  controllers: [userPhotosController],
  imports: [
    SequelizeModule.forFeature([userPhotos, User]),
    FilesModule
  ],
  exports: [userPhotosService]
})
export class userPhotosModule {}
