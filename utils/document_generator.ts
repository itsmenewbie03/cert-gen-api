import createReport from "docx-templates";
import { readFileSync } from "fs";

type Person = {
  first_name: string;
  last_name: string;
};

const generate_smol_pp_cert = async (person: Person) => {
  const template = readFileSync("templates/smol_pp_cert.docx");
  const buffer = await createReport({
    template,
    cmdDelimiter: ["{", "}"],
    data: {
      first_name: person.first_name,
      last_name: person.last_name,
    },
  });
  return Buffer.from(buffer);
};

export { generate_smol_pp_cert };
