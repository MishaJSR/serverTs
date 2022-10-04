import { Module } from '@nestjs/common';
import { ChatsService} from './chats.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Chats} from './chats.model';
import { User } from 'src/users/users.model';
import { ChatsController } from './chats.controller';


@Module({
  providers: [ChatsService],
  controllers: [ChatsController],
  imports: [
    SequelizeModule.forFeature([Chats, User])
  ]
})
export class ChatsModule {}
