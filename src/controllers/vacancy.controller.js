import {
  saveVacancy,
  getAllVacancy,
  removeVacancy,
  sellerVacancies,
} from "../services/vacancy.service.js";

class VacancyController {
  constructor() {}

  async getVacancies(req, res) {
    const vacancies = await getAllVacancy();
    res.status(200).json({ status: 1, data: vacancies });
  }

  async getSellerVacancies(req, res) {
    const vacancies = await sellerVacancies(req.user["_id"]);
    res.status(200).json({ status: 1, data: vacancies });
  }

  async addVacancy(req, res) {
    const newVacancy = await saveVacancy(req.body, req.user["_id"]);
    res.status(201).json({ status: 1, data: newVacancy });
  }

  async deleteVacancy(req, res) {
    const deletedVacancy = await removeVacancy(
      req.user["_id"],
      req.params.vacancyId
    );
    res.status(202).json({ status: 1, data: deletedVacancy });
  }
}

export default new VacancyController();
