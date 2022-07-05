import { Gifts } from './gifts.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from'mongoose';

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
}

export const UsersSchema = SchemaFactory.createForClass(Users);