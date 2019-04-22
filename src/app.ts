import { Store } from './store';

interface Lib{
  [key: string]: Store;
}

export class App{
  /* stores library */
  private library: Lib = {};
  /* id constant */
  private idConstant: string = 'store';

  /* generate a unique id  */
  private getUniqueID(): string {
    return `_${Math.random().toString(36).substr(2, 9)}`;
  }

  /* check if store exists */
  private storeExist(id : string): Boolean {
    return this.library.hasOwnProperty(id);
  }

  /* creates a new store */
  public createNewStore(name: string): App {
    // generate a unique id
    const id: string = this.getUniqueID();
    // give the id a constant identifier
    const idString: string = `${this.idConstant}${id}`;
    // instantiate a new store and save it
    const store = new Store(name, idString);
    this.library[idString] = store;

    return this;
  }

  /* delete a store */
  public deleteStore(id: string): App {
    // check if store exists
    if (this.storeExist(id)) {
      delete this.library[id];
    }

    return this;
  }

  /* return all the stores */
  public stores(): Lib {
    return this.library;
  }

  /* expose a store */
  public getStore(id: string): Store|Boolean {
    // check if a store exist
    if (this.storeExist(id)) {
      return this.library[id];
    }
    return false;
  }
}
