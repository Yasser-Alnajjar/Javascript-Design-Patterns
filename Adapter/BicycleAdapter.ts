import { Bicycle } from "./Bicycle";
import { Vehicle } from "./Vehicle";

export class BicycleAdapter  implements Vehicle{
  bike:Bicycle
constructor(bike:Bicycle){
this.bike=bike
}

  sound(): void {
    this.bike.bikesound()
  }
  startMoveing(): void {
    this.bike.padal()
  }
  stopMove(): void {
    this.bike.stop()
  }
}
