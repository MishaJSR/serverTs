import { Module } from '@nestjs/common';
import { GendersService} from './genders.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Genders} from './genders.model';
import { User } from 'src/users/users.model';
import { GendersController } from './genders.controller';
import { Messages } from 'src/messages/messages.model';


@Module({
  providers: [GendersService],
  controllers: [GendersController],
  imports: [
    SequelizeModule.forFeature([Genders, User])
  ]
})
export class GendersModule {}
