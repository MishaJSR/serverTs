import { ObjectId } from "mongoose";

export class CreatePostsDto {
    readonly userId
    readonly id_adder
    readonly text
}