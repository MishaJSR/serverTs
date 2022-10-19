import { UsersService } from './../users/users.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Chats } from 'src/chats/chats.model';
import { ChatsService } from 'src/chats/chats.service';
import { FilesModule } from 'src/files/files.module';
import { FontsMessageController } from './fonts-message.controller';
import { fontsMessageService } from './fonts-message.service';

import { fontsMessage } from './fontsMessage.model';
import { ChatsModule } from 'src/chats/chats.module';

@Module({
  controllers: [FontsMessageController],
  providers: [fontsMessageService],
  imports: [
    SequelizeModule.forFeature([fontsMessage, Chats]),
    FilesModule
  ],
  exports:[fontsMessageService]
})
export class FontsMessageModule {}
