import { Likes, LikesSchema } from './schemas/likes.schema';
import { PostsSchema } from './schemas/posts.schema';
import { Posts } from './schemas/posts.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import { Coments, ComentsSchema } from './schemas/coments.schema';


@Module({
    imports: [
        MongooseModule.forFeature([{name: Posts.name, schema: PostsSchema}]),
        MongooseModule.forFeature([{name: Coments.name, schema: ComentsSchema}]),
        MongooseModule.forFeature([{name: Likes.name, schema: LikesSchema}])
            
    ],
    controllers: [PostsController],
    providers: [PostsService]
})

export class PostsModule {}
