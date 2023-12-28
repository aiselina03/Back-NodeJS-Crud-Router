// 1. Schemalari bura copy-paste edirik
// 2. Schema'ni ve mongoose'u import edirik
// 3. userModeli export edirik

import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
    userName: String,
    email: String,
    password: String,
    age: Number,
    isMarried: String,
  });
  export const UserModel = mongoose.model("users", usersSchema);