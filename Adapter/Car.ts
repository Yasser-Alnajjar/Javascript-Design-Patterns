import { Vehicle } from "./Vehicle";

export class Car  implements Vehicle{

  sound(): void {
    console.log("Car sound");
    
  }
  startMoveing(): void {
    console.log("Car startMoveing");
    
  }
  stopMove(): void {
    console.log("Car stopMove");
    
  }
}
