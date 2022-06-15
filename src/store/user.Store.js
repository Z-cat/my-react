import { makeAutoObservable } from "mobx";
class UserInfo {
  token = 0;
  userdata = {};
  routerlist = []

  constructor() {
    makeAutoObservable(this);
  }

  addCount = () => {
    this.count++;
  };
}

export { UserInfo };
