import mongoose from "mongoose";

export interface IEmail {
  email: string;
}

// TODO: Make it better......

const EmailSchema = new mongoose.Schema<IEmail>(
  {

    email: {
      type: String,
    },

  },
  { timestamps: true }
);

let EmailModel: mongoose.Model<IEmail>;

try {
  // Try to retrieve an existing model
  EmailModel = mongoose.model<IEmail>("Email");
} catch (e) {
  // If the model doesn't exist, define it
  EmailModel = mongoose.model<IEmail>("Email", EmailSchema);
}

export const Email = EmailModel;
