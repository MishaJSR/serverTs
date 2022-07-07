import { Likes } from './likes.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from'mongoose';
import { Users } from './users.schema';
import { Coments } from './coments.schema';

export type PostsDocument = Posts & Document;

@Schema()
export class Posts {
  @Prop()
  userId: string;

  @Prop()
  id_adder: string;

  @Prop()
  text: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Likes'}]})
  likes: Likes;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Coments'}]})
  coments: Coments;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}]})
  users: Users;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);