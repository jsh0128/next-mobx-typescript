import React from "react";
import { AppContext } from "next/dist/pages/_app";
import { NextPage, NextPageContext } from "next";
import { Provider } from "mobx-react";
import { initializeStore } from "store";
import CssBaseline from "@mui/material/CssBaseline";
import StoreType from "util/types/StoreType";

interface CustomCtx extends NextPageContext {
  store: StoreType;
}

interface AppContextStore extends AppContext {
  ctx: CustomCtx;
}

interface MyAppProps {
  pageProps: any;
  Component: NextPage;
  mobxStore: StoreType;
}

const MyApp = ({ pageProps, Component, mobxStore }: MyAppProps) => {
  const isServer = typeof window === "undefined";
  const store = isServer ? mobxStore : initializeStore(mobxStore);

  return (
    <Provider {...store}>
      <CssBaseline />
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContextStore) => {
  let pageProps = {};

  ctx.store = initializeStore();

  if (typeof Component.getInitialProps === "function") {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { ...pageProps, mobxStore: ctx.store };
};

export default MyApp;
