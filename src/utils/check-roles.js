class Url {
  static AddVacancy = "/api/vacancy/add";
  static GetSellerVacancies = "/api/vacancy/seller";
  static ApplyJob = "/api/apply/";
}

export function checkRole(url, user) {
  switch (url) {
    case Url.AddVacancy:
      if (user.role !== "recruiter") {
        return "Role must be recruiter";
      }
      break;
    case Url.ApplyJob:
      if (user.role !== "user") {
        return "Role must be user";
      }
      break;
    case Url.GetSellerVacancies:
      if (user.role !== "recruiter") {
        return "Role must be recruiter";
      }
      break;
  }

  return null;
}
