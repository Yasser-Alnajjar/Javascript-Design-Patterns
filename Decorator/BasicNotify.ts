import { Notify } from "./Notify";

export class BasicNotify implements Notify {
  getProvider(): string {
    return "Provider - ";
  }
  getMessage(): string {
    return "Message";
  }
}
