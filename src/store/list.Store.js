import { makeAutoObservable } from "mobx";
class ListStore {
  list = [1,2,3];

  constructor() {
    makeAutoObservable(this);
  }

  addList = () => {
    this.list.push(3,5,6)
  };
}

export { ListStore };
