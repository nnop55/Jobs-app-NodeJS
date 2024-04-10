import Vacancy from "../models/vacancy.model.js";

export async function saveVacancy(body, authorId) {
  const newVacancy = new Vacancy({
    title: body.title,
    description: body.description,
    category: body.category,
    author: authorId,
  });

  await newVacancy.save();
  return newVacancy;
}

export async function getAllVacancy() {
  const vacancies = await Vacancy.find();
  return vacancies;
}

export async function removeVacancy(userId, vacancyId) {
  const vacancy = await Vacancy.findOne({
    _id: vacancyId,
    author: userId,
  });

  if (!vacancy) {
    throw new Error("Vacancy not found");
  }

  await vacancy.deleteOne();

  return vacancy;
}

export async function applyInVacancy(vacancyId, applyId) {
  await Vacancy.updateOne(
    { _id: vacancyId },
    {
      $push: { applies: applyId },
    }
  );
}

export async function sellerVacancies(authorId) {
  const vacancies = await Vacancy.find({ author: authorId });

  if (vacancies.length === 0) {
    throw new Error("Vacancies not found");
  }

  return vacancies;
}
