import { FileModule } from './file/file.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';


@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
          }),
        MongooseModule.forRoot('mongodb+srv://adminMixa:4815162342@cluster0.4c27r.mongodb.net/?retryWrites=true&w=majority'),
        UsersModule,
        FileModule,
        
    ]
})
export class AppModule {}