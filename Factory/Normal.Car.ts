import { Car } from "./Car";

export class NormalCar extends Car {
  constructor() {
    super();
    this.setName("Normal Car");
    this.setSpeed(200);
  }
}
