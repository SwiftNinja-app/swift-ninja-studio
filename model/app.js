import Runner from "./runner";

export default class App {

  constructor() {
    this.runner = new Runner();
  }

  onRunCallback() {
    console.log("On Run callback")
  }

  onShareCallBack() {
    console.log("On Share callback")
  }
}