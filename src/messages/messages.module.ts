import { Module } from '@nestjs/common';
import { MessagesService} from './messages.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Messages} from './messages.model';
import { User } from 'src/users/users.model';
import { MessagesController } from './messages.controller';
import { Chats } from 'src/chats/chats.model';


@Module({
  providers: [MessagesService],
  controllers: [MessagesController],
  imports: [
    SequelizeModule.forFeature([Messages, Chats])
  ]
})
export class MessagesModule {}
