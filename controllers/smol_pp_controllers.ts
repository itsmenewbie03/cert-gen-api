import type { Request, Response } from "express";
import { generate_smol_pp_cert } from "../utils/document_generator";

const smol_pp_controller = async (req: Request, res: Response) => {
  const { first_name, last_name } = req.query;
  if (!first_name || !last_name) {
    return res.status(400).json({
      message: "Missing parameters. first_name and last_name is required!",
    });
  }
  const person = {
    first_name: first_name as string,
    last_name: last_name as string,
  };
  const output = await generate_smol_pp_cert(person);
  const mirror_link = await fetch(
    `https://transfer.sh/${person.first_name}_${
      person.last_name
    }_${Date.now()}.docx`,
    {
      method: "PUT",
      body: output,
    },
  ).then((response) => response.text());
  return res
    .status(200)
    .json({ message: "Certificate generated successfully.", url: mirror_link });
};

export { smol_pp_controller };
