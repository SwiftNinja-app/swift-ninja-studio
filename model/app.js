import Runner from "./runner";
import Network from './network';
import { v4 as uuidv4 } from 'uuid';

export default class App {

  constructor() {
    this.runner = new Runner();
  }

  async onRunCallback(code) {
    console.log("On Run callback: " + code)
    const id = uuidv4();
    const response = await Network.executeSwiftCodeAPI(code, id);
  }

  onShareCallBack() {
    console.log("On Share callback")
  }
}