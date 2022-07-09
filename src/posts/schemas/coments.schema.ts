import { Posts } from './posts.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from'mongoose';

export type ComentsDocument = Coments & Document;

@Schema()
export class Coments {
  @Prop()
  postId: string;

  @Prop()
  id_adder: string;

  @Prop()
  text: string;


  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Posts'}]})
  posts: Posts;

}

export const ComentsSchema = SchemaFactory.createForClass(Coments);