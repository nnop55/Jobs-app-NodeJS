import mongoose from "mongoose";
import {
  insertVacancyInUser,
  deleteVacancyFromUser,
} from "../services/user.service.js";
import { deleteApply } from "../services/apply.service.js";

const VacancySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["IT", "Logistics", "HR", "Engineer", "Tester"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Apply",
      },
    ],
  },
  { versionKey: false }
);

VacancySchema.post("save", { document: true }, async function (doc, next) {
  await insertVacancyInUser(doc.author, doc._id);
  next();
});

VacancySchema.post("deleteOne", { document: true }, async function (doc, next) {
  await deleteVacancyFromUser(doc.author, doc._id);
  await deleteApply(doc._id);
  next();
});

export default mongoose.model("Vacancy", VacancySchema);
