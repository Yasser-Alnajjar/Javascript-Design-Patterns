export class Car {
  private name: string = "Car";
  private speed: number = 100;
  constructor() {
    console.log("Car Is Created !");
  }
  setName(name: string) {
    this.name = name;
  }
  setSpeed(speed: number) {
    this.speed = speed;
  }
  getName() {
    return this.name;
  }
  getSpeed() {
    return this.speed;
  }
  print() {
    console.log(`${this.name} with Speed ${this.speed}`);
  }
}
