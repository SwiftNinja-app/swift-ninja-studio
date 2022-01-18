import * as Network from "./network";
import { v4 as uuidv4 } from "uuid";

const id = uuidv4();

export const executeCode = async (code) => {
  return await Network.executeSwiftCodeAPI(code, id);
};
