import Count from "components/Count";
import type { NextPage } from "next";
import CustomNextPage from "util/types/CustomNextPage";

const Home: NextPage = () => {
  return <Count />;
};

Home.getInitialProps = async (ctx: CustomNextPage) => {
  await ctx.store.CountStore.increase();
};

export default Home;
