import { makeAutoObservable } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { createContext } from "react";
import StoreType from "util/types/StoreType";
import CountStore from "./CountStore";

enableStaticRendering(typeof window === "undefined");

let store: any;
export const StoreContext = createContext(null);

class Store {
  CountStore = new CountStore();

  constructor(props: StoreType | null) {
    makeAutoObservable(this);
    if (props) this.hydrate(props);
  }

  hydrate = (store: StoreType) => {
    if (!store) return;
    this.CountStore = new CountStore(store.CountStore);
  };
}

export function initializeStore(initialData: StoreType | null = null) {
  const _store = store ?? new Store(initialData);

  if (initialData) {
    _store.hydrate(initialData);
  }

  if (typeof window === "undefined") return _store;

  if (!store) store = _store;

  return _store;
}
