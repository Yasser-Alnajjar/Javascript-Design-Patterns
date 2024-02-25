import { Singleton } from "./Singleton";

// const single = new Singleton();
// const single2 = new Singleton();

// console.log(single === single2); // false

const single = Singleton.getInstance();
const single2 = Singleton.getInstance();

console.log(single === single2); // true
