import express, { Request, Response } from "express";
import { smol_pp_controller } from "./controllers/smol_pp_controllers";

const app = express();
const PORT = process.env.PORT || 6969;

app.get("/smol_pp", smol_pp_controller);
app.get("/", (_: Request, res: Response) => {
  res.status(200).json({ message: "Hi<3" });
});
app.listen(PORT, () => {
  console.log(`We are alive at http://localhost:${PORT}`);
});
