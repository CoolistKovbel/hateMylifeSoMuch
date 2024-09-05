import mongoose from "mongoose";

export interface IStupidFuckingFaucetTokenAdditionModal {
  token: string;
  amount: number;
  RewardRate: number;
  tokenSYMBOL: string;
  tokenAddress: string;
  faucetWaitTime: number;
  timeSet: number;
  tokenABI: string;
}

// TODO: Make it better......

const StupidFuckingFaucetTokenAdditionSchema =
  new mongoose.Schema<IStupidFuckingFaucetTokenAdditionModal>(
    {
      token: {
        type: String,
      },
      faucetWaitTime: {
        type: Number
      },
      RewardRate: {
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
      timeSet: {
        type: Number,
      },
      tokenABI: {
        type: String,
      },

    },
    { timestamps: true }
  );

let StupidFuckingFaucetTokenAdditionModel: mongoose.Model<IStupidFuckingFaucetTokenAdditionModal>;

try {
  // Try to retrieve an existing model
  StupidFuckingFaucetTokenAdditionModel =
    mongoose.model<IStupidFuckingFaucetTokenAdditionModal>(
      "StupidFuckingFaucetTokenAddition"
    );
} catch (e) {
  // If the model doesn't exist, define it
  StupidFuckingFaucetTokenAdditionModel =
    mongoose.model<IStupidFuckingFaucetTokenAdditionModal>(
      "StupidFuckingFaucetTokenAddition",
      StupidFuckingFaucetTokenAdditionSchema
    );
}

export const StupidFuckingFaucetTokenAddition =
  StupidFuckingFaucetTokenAdditionModel;
