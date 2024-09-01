import mongoose from "mongoose";

export interface IBidsModal {
  account: string;
  price: number;
  amount: number;
  tokenSYMBOL: string;
  tokenAddress: string;
  sig: string;
}

// TODO: Make it better......

const BidsModalSchema = new mongoose.Schema<IBidsModal>(
  {
    account: {
      type: String,
    },
    price: {
      type: Number,
    },
    amount: {
      type: Number,
    },
    tokenSYMBOL: {
      type: String,
    },
    tokenAddress: {
      type: String,
    },
    sig: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

let BidsModalModel: mongoose.Model<IBidsModal>;

try {
  // Try to retrieve an existing model
  BidsModalModel = mongoose.model<IBidsModal>("BidsModal");
} catch (e) {
  // If the model doesn't exist, define it
  BidsModalModel = mongoose.model<IBidsModal>("BidsModal", BidsModalSchema);
}

export const BidsModal = BidsModalModel;
