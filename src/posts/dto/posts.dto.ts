import { ObjectId } from "mongoose";

export class CreatePostsDto {
    readonly userId: ObjectId
    readonly id_adder: ObjectId
    readonly text: String
}