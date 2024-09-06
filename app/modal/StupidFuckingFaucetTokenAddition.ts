import mongoose from "mongoose";

export interface IStupidFuckingFaucetTokenAdditionModal {
  token: string;
  amount: number;
  RewardRate: number;
  tokenSYMBOL: string;
  tokenAddress: string;
  faucetWaitTime: string;
  faucetCountDownRemains: string;
  timeSet: number;
  tokenABI: string;
  faucetLaps: number;
  faucetClaim: number;
}

// TODO: Make it better......

const StupidFuckingFaucetTokenAdditionSchema =
  new mongoose.Schema<IStupidFuckingFaucetTokenAdditionModal>(
    {
      token: {
        type: String,
      },
      faucetWaitTime: {
        type: String,
      },
      faucetLaps: {
        type: Number,
        default: 0
      },
      faucetCountDownRemains: {
        type: String,
        default: "0H 0M"
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
      faucetClaim: {
        type: Number,
        default: 0
      }
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
