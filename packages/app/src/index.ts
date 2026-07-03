import express from "express";
import { urlLogger } from "@multirepo/logger";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(urlLogger);

app.get("/", (_req, res) => {
  res.json({ message: "Hello from @multirepo/app!" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
