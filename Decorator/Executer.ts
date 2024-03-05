import { BasicNotify } from "./BasicNotify";
import { Facebook } from "./Facenook";
import { Mail } from "./Mail";

// const notification = new Facebook(new Mail(new BasicNotify()));
const notification = new Facebook(new BasicNotify());
console.log(notification.getMessage());
console.log(notification.getProvider());
