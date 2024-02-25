import { Book } from "./Book";
import { Client } from "./Client";

const Yasser = new Client("Yasser");
const Yousef = new Client("Yousef");
const Mostafa = new Client("Mostafa");
const Ahmed = new Client("Ahmed");

const typescript = new Book("typescript", true);
const javascript = new Book("javascript", false);

typescript.subscibe(Yasser);
typescript.subscibe(Yousef);

javascript.subscibe(Mostafa);
javascript.subscibe(Ahmed);

typescript.watchSubscibes();
javascript.watchSubscibes();

setTimeout(() => {
  console.log("############");
  javascript.unsubscibe(Mostafa);

  javascript.unsubscibe(Ahmed);
  javascript.watchSubscibes();
}, 1000);
