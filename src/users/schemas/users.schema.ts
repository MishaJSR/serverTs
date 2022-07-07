import { Gifts } from './gifts.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from'mongoose';
import { Friends } from './friends.schema';
import { Posts } from './posts.schema';
import { Likes } from './likes.schema';
import { Coments } from './coments.schema';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  id_user: number;

  @Prop()
  username: string;

  @Prop()
  surname: string;

  @Prop()
  status: string;

  @Prop()
  about: string;

  @Prop()
  email: string;

  @Prop()
  avaImg: string;

  @Prop()
  isAuth: boolean;

  @Prop()
  audio: string;

  @Prop()
  picture: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Gifts'}]})
  gifts: Gifts[];

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Friends'}]})
  friends: Friends[];

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Posts'}]})
  posts: Posts[];

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Likes'}]})
  likes: Likes[];

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Coments'}]})
  coments: Coments[];
}

export const UsersSchema = SchemaFactory.createForClass(Users);