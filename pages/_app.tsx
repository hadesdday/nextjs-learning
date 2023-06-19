import axiosClient from "@/api-client/axios-client";
import { EmptyLayout } from "@/components/layout";
import { AppPropsWithLayout } from "@/models";
import "@/styles/globals.css";
import createEmotionCache from "@/utils/create-emotion-cache";
import theme from "@/utils/theme";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { SWRConfig } from "swr";
import "@/styles/prism.css";

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  //every change route this component will be re-render ( unmount and mount )
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* css reset */}
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: (url: string) => axiosClient.get(url),
            shouldRetryOnError: false, //tắt retry to fetch khi fetch failed
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}
