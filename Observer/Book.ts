import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class Book implements Subject {
  private name: string;
  private availabilty: string;
  private ObserverList: Observer[] = [];
  constructor(name: string, availabe: boolean) {
    this.name = name;
    this.availabilty = `${this.name} ${availabe ? "Availabe" : "Not Availabe"}`;
  }

  subscibe(observer: Observer): void {
    this.ObserverList.push(observer);
  }
  unsubscibe(observer: Observer): void {
    this.ObserverList.splice(this.ObserverList.indexOf(observer), 1);
  }
  watchSubscibes(): void {
    this.ObserverList.forEach((observer) => {
      observer.update(this.availabilty);
    });
  }
}
