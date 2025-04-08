import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser =async (user : IUser)=>{
    const user = await User.findOne({ email: user.email });
    if (user) {

        throw new Error('User already exists');
    }
    const newUser = await User.create(user)
    return newUser;
}
export const UserServices = {
    createUser  }