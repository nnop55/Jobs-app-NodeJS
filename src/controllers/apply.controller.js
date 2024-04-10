import { insertApply } from "../services/apply.service.js";

class ApplyController {
  constructor() {}

  async applyJob(req, res) {
    const apply = await insertApply(req.body, req.user["_id"]);
    res.status(200).json({ status: 1, data: apply });
  }
}

export default new ApplyController();
