import { Posts } from './posts.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from'mongoose';

export type LikesDocument = Likes & Document;

@Schema()
export class Likes {
  @Prop()
  userId: string;

  @Prop()
  id_adder: string;
  

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Posts'}]})
  likes: Posts;

}

export const LikesSchema = SchemaFactory.createForClass(Likes);