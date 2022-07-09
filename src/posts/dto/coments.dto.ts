import { ObjectId } from "mongoose";

export class CreateComentsDto {
    readonly postId: ObjectId
    readonly id_adder: ObjectId
    readonly text: String
}