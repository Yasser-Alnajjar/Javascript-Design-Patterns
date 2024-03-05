import { Car } from "./Car";

export class SuperCar extends Car {
  constructor() {
    super();
    this.setName("Super Car");
    this.setSpeed(250);
  }
}
