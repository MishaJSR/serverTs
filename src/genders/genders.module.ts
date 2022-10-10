import { Module } from '@nestjs/common';
import { GendersService} from './genders.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Genders} from './genders.model';
import { User } from 'src/users/users.model';
import { GendersController } from './genders.controller';
import { genderPhotos } from 'src/genderPhotos/genderPhotos.model';


@Module({
  providers: [GendersService],
  controllers: [GendersController],
  imports: [
    SequelizeModule.forFeature([Genders, User, genderPhotos])
  ]
})
export class GendersModule {}
