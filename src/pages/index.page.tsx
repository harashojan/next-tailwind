import { RecoilRoot } from "recoil";

import { MainLayout } from "@/components/layouts/MainLayout";

import type { CustomNextPage } from "next";

const Home: CustomNextPage = () => {
  return <div>HOME</div>;
};

Home.getLayout = (page) => (
  <MainLayout>
    <RecoilRoot>{page}</RecoilRoot>
  </MainLayout>
);

export default Home;
