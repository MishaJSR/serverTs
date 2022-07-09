import { ObjectId } from "mongoose";

export class CreateLikesDto {
    readonly postId: ObjectId
    readonly id_adder: ObjectId
}