export class Singleton {
  private static instance: Singleton;
  private constructor() {
    console.log("Object Created");
  }
  public static getInstance() {
    if (Singleton.instance === null) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}
