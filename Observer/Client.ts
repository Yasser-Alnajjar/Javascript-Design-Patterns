import { Observer } from "./Observer";

export class Client implements Observer {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  update(message: string): void {
    console.log(`${this.name} has notification ${message}`);
  }
}
