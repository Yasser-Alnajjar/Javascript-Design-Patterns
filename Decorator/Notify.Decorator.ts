import { Notify } from "./Notify";

export class NotifyDecorator implements Notify {
  notify: Notify;

  constructor(notify: Notify) {
    this.notify = notify;
  }
  getProvider(): string {
    return this.notify.getProvider();
  }
  getMessage(): string {
    return this.notify.getMessage();
  }
}
