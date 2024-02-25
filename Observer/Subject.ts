import { Observer } from "./Observer";

export interface Subject {
  subscibe(observer: Observer): void;
  unsubscibe(observer: Observer): void;
  watchSubscibes(): void;
}
