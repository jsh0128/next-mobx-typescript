import { makeAutoObservable } from "mobx";

class CountStore {
  count: number = 0;
  constructor(data?: CountStore) {
    makeAutoObservable(this);

    if (!data) return;
    Object.assign(this, data);
  }

  increase = () => {
    this.count = this.count + 1;
  };

  decrease = () => {
    this.count = this.count - 1;
  };
}

export default CountStore;
