import * as Runner from "./runner";

export default class App {

  constructor() {
    console.log("Init App")
    this.onNewConsoleMessage = (message) => {};
  }

  async onRunCallback(code) {
    const response = await Runner.executeCode(code);
    const output = response.data.result;
    this.onNewConsoleMessage(output);
  }

  onShareCallBack() {
    console.log("On Share callback")
  }
}