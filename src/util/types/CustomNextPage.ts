import { NextPageContext } from "next";
import StoreType from "./StoreType";
// import StoreType from './StoreType';

interface CustomNextPage extends NextPageContext {
  store: StoreType;
}

export default CustomNextPage;
