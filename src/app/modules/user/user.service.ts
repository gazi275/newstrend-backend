import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser =async (user : IUser)=>{
    const newUser = await User.create(user)
    return newUser;
}
export const UserServices = {
    createUser  }