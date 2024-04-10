import express from "express";
import { connectToDb } from "./shared/database.js";

import userRouter from "./routers/user.router.js";
import authRouter from "./routers/auth.router.js";
import vacancyRouter from "./routers/vacancy.router.js";
import applyRouter from "./routers/apply.router.js";

const app = express();
app.use(express.json());

function setupRouters() {
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);
  app.use("/api/vacancy", vacancyRouter);
  app.use("/api/apply", applyRouter);
}

function setupErrorHandling() {
  app.all("*", (req, res) => {
    res.status(404).send("Not Found");
  });
}

async function main() {
  setupRouters();
  setupErrorHandling();

  const PORT = process.env.port || 3000;
  await connectToDb().then(() => {
    app.listen(PORT, () => {
      console.log(`Serveris is running on ${PORT}`);
    });
  });
}

main();
