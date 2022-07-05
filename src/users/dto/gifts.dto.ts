import { ObjectId } from "mongoose";

export class CreateGiftsDto {
    readonly userId: ObjectId
    readonly id_present: ObjectId
    readonly gift_img: string;
    readonly cod: string
}