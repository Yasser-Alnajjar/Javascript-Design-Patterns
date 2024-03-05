import { CarFactory } from "./Car.Factory";

const Normal = CarFactory.createCar(0);
Normal?.print();
// const Super = CarFactory.createCar(CarFactory.Super);
// Super?.print();
