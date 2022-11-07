import { Module } from '@nestjs/common';
import { ChatsService} from './chats.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Chats} from './chats.model';
import { User } from 'src/users/users.model';
import { ChatsController } from './chats.controller';
import { Messages } from 'src/messages/messages.model';
import { fontsMessage } from 'src/fonts-message/fontsMessage.model';
import { FontsMessageModule } from 'src/fonts-message/fonts-message.module';


@Module({
  providers: [ChatsService],
  controllers: [ChatsController],
  imports: [
    SequelizeModule.forFeature([Chats, User, Messages, fontsMessage]),
    FontsMessageModule
  ],
  exports: [ChatsService]
})
export class ChatsModule {}
