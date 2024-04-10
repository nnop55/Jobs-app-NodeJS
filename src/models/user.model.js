import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "recruiter"],
    },
    vacancies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vacancy",
      },
    ],
  },
  { versionKey: false }
);

export default mongoose.model("User", UserSchema);
