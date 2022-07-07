import { ObjectId } from "mongoose";

export class CreateLikesDto {
    readonly userId: ObjectId
    readonly id_adder: ObjectId
}