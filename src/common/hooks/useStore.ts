import React from "react";
import { MobXProviderContext } from "mobx-react";
import StoreType from "util/types/StoreType";

const useStore = () => React.useContext(MobXProviderContext) as StoreType;
export default useStore;
