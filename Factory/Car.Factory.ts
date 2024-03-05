import { NormalCar } from "./Normal.Car";
import { SuperCar } from "./Super.Car";

export class CarFactory {
  static Super = 1;
  static Normal = 2;
  static createCar(type: number) {
    switch (type) {
      case this.Super:
        return new SuperCar();
      case this.Normal:
        return new NormalCar();
      default:
        break;
    }
  }
}
