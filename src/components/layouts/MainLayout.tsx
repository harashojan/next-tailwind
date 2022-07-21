import { RecoilRoot } from "recoil";

import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

import type { CustomLayout } from "next";

/**
 * @package
 */
export const MainLayout: CustomLayout = (page) => {
  return (
    <RecoilRoot>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto w-full max-w-4xl flex-1 px-4">
          <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
        </main>
      </div>
    </RecoilRoot>
  );
};
