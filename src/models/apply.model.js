import mongoose from "mongoose";
import { applyInVacancy } from "../services/vacancy.service.js";

const ApplySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    vacancy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vacancy",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

ApplySchema.post("save", { document: true }, async function (doc, next) {
  await applyInVacancy(doc.vacancy, doc._id);
  next();
});

export default mongoose.model("Apply", ApplySchema);
