import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from'mongoose';
import { Users } from './users.schema';

export type FriendsDocument = Friends & Document;

@Schema()
export class Friends {
  @Prop()
  userId: string;

  @Prop()
  id_friend: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}]})
  users: Users;
}

export const FriendsSchema = SchemaFactory.createForClass(Friends);