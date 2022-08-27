import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Follow } from './follow.model';
import { FollowController} from './followers.controller';
import { FollowService } from './followers.service';

@Module({
  controllers: [FollowController],
  providers: [FollowService],
  imports: [
    SequelizeModule.forFeature([Follow])
  ]
})
export class FollowersModule {}
