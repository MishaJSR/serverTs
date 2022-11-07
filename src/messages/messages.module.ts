import { Module } from '@nestjs/common';
import { MessagesService} from './messages.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Messages} from './messages.model';
import { User } from 'src/users/users.model';
import { MessagesController } from './messages.controller';
import { Chats } from 'src/chats/chats.model';
import { ChatsModule } from 'src/chats/chats.module';
import { fontsMessage } from 'src/fonts-message/fontsMessage.model';


@Module({
  providers: [MessagesService],
  controllers: [MessagesController],
  imports: [
    SequelizeModule.forFeature([Messages, Chats, fontsMessage]),
    ChatsModule
  ]
})
export class MessagesModule {}
