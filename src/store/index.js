import React from "react";
import { CounterStore } from './counter.Store'
import { ListStore } from './list.Store'


class RootStore{
  constructor() {
    this.CounterStore = new CounterStore()
    this.ListStore = new ListStore()
  }
}

const rootstore = new RootStore();

const context = React.createContext(rootstore);
const UserStore = () => {
  return React.useContext(context);
}

export { UserStore };