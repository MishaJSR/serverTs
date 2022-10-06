import { Module } from '@nestjs/common';
import { genderPhotosService } from './genderPhotos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { genderPhotos} from './genderPhotos.model';
import { User } from 'src/users/users.model';
import { genderPhotosController } from './genderPhotos.controller';
import { Messages } from 'src/messages/messages.model';
import { FilesModule } from 'src/files/files.module';
import { userPhotosModule } from 'src/userPhotos/userPhotos.module';


@Module({
  providers: [genderPhotosService],
  controllers: [genderPhotosController],
  imports: [
    SequelizeModule.forFeature([genderPhotos, User]),
    FilesModule
  ]
})
export class genderPhotosModule {}
