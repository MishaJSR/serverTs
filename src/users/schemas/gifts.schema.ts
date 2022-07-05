import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from'mongoose';
import { Users } from './users.schema';

export type GiftsDocument = Gifts & Document;

@Schema()
export class Gifts {
  @Prop()
  id_user: number;

  @Prop()
  gift_img: string;

  @Prop()
  cod: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}]})
  users: Users;

}

export const GiftsSchema = SchemaFactory.createForClass(Gifts);