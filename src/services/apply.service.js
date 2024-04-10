import Apply from "../models/apply.model.js";

export async function insertApply(body, authorId) {
  const newApply = new Apply({
    vacancy: body.vacancy,
    user: authorId,
    description: body.description,
  });

  await newApply.save();
  return newApply;
}

export async function deleteApply(vacancyId) {
  await Apply.deleteMany({ vacancy: vacancyId });
}
