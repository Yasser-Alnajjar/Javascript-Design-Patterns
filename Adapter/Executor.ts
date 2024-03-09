import { Bicycle } from "./Bicycle";
import { BicycleAdapter } from "./BicycleAdapter";
import { Car } from "./Car";
import { Vehicle } from "./Vehicle";

const car:Vehicle = new Car()
const bike:Vehicle=new BicycleAdapter(new Bicycle())


function useVehicle(car:Vehicle){
car.sound()
car.startMoveing()
car.stopMove()
console.log("--------------------");

}
useVehicle(car)
useVehicle(bike)