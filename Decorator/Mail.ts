import { Notify } from "./Notify";
import { NotifyDecorator } from "./Notify.Decorator";

export class Mail extends NotifyDecorator {
  notify: Notify;
  constructor(notify: Notify) {
    super(notify);
    this.notify = notify;
  }
  getMessage(): string {
    return this.notify.getMessage() + " , Mail";
  }
  getProvider(): string {
    return this.notify.getProvider() + " , Mail";
  }
}
