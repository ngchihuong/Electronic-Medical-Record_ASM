import mongoose from "mongoose";

export type UsersType = {
    _id: string,
    fullName: string,
    email: string,
    password: string,
};
const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true,},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true,}
});
const Users = mongoose.model<UsersType>("Users", userSchema);
export default Users; 
