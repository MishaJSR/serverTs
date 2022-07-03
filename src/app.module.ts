import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://adminMixa:4815162342@cluster0.4c27r.mongodb.net/?retryWrites=true&w=majority'),
        UsersModule
    ]
})
export class AppModule {}