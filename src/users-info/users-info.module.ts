import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersInfoController } from './users-info.controller';
import { UsersInfoService } from './users-info.service';
import { UserInfo } from './users-info.model';

@Module({
  controllers: [UsersInfoController],
  providers: [UsersInfoService],
  imports: [
    SequelizeModule.forFeature([UserInfo])
  ]
})
export class UsersInfoModule {}
