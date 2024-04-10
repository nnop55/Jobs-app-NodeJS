import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    accessToken: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model("Token", TokenSchema);
