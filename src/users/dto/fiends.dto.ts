import { ObjectId } from "mongoose";

export class CreateFriendsDto {
    readonly userId: ObjectId
    readonly id_friend: ObjectId
}