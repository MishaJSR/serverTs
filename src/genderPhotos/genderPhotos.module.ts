import { Module } from '@nestjs/common';
import { genderPhotosService } from './genderPhotos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { genderPhotos} from './genderPhotos.model';
import { User } from 'src/users/users.model';
import { genderPhotosController } from './genderPhotos.controller';
import { FilesModule } from 'src/files/files.module';


@Module({
  providers: [genderPhotosService],
  controllers: [genderPhotosController],
  imports: [
    SequelizeModule.forFeature([genderPhotos, User]),
    FilesModule
  ]
})
export class genderPhotosModule {}
