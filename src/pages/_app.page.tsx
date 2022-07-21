import type { CustomAppPage } from "next/app";

import { MantineProvider } from "@mantine/core";

import "../styles/globals.css";

if (process.env.NODE_ENV === "development") {
  require("@/tests/mocks");
}

const MyApp: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionOptions={{ key: "mantine", prepend: false }}
    >
      {getLayout(<Component {...pageProps} />)}
    </MantineProvider>
  );
};

export default MyApp;
