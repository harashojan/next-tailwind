import { MainLayout } from "@/components/layouts";

import type { CustomNextPage } from "next";

const Index: CustomNextPage = () => {
  return (
    <div>
      <h2>Index</h2>
    </div>
  );
};

Index.getLayout = MainLayout;

// Index.getLayout = (page) => (
//   <MainLayout>
//     <RecoilRoot>{page}</RecoilRoot>
//   </MainLayout>
// );

export default Index;
