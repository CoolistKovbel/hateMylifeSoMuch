import mongoose from "mongoose";
import { StupidFuckingFaucetTokenAddition } from "./StupidFuckingFaucetTokenAddition";

export interface IUser {
  username: string;
  email: string;
  password: string;
  preference: string;
  image: string;
  role: string;
  isPro: boolean;
  metaAddress: string;
  sig: string;
  description: string;
  userFaucets: any;
}

// TODO: Make it better......

const UserSchema = new mongoose.Schema<IUser>(
  {
    metaAddress: {
      type: String,
      unique: true,
    },
    sig: {
      type: String,
      unique: true,
    },
    userFaucets: [{
      type: mongoose.Types.ObjectId,
      ref: StupidFuckingFaucetTokenAddition
    }]
  },
  { timestamps: true }
);

let UserModel: mongoose.Model<IUser>;

try {
  // Try to retrieve an existing model
  UserModel = mongoose.model<IUser>("User");
} catch (e) {
  // If the model doesn't exist, define it
  UserModel = mongoose.model<IUser>("User", UserSchema);
}

export const User = UserModel;
