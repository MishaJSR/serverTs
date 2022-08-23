import { ComentsController } from './coments.controller';
import { Module } from '@nestjs/common';
import { ComentsService } from './coments.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Posts } from 'src/posts/posts.model';
import { Coments } from './coments.model';

@Module({
    providers: [ComentsService],
    controllers: [ComentsController],
    imports: [
      SequelizeModule.forFeature([Coments, Posts])
    ]
  })
  export class ComentsModule {}