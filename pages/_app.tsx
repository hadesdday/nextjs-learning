import { EmptyLayout } from "@/components/layout";
import { AppPropsWithLayout } from "@/models";
import { SWRConfig } from "swr";
import "@/styles/globals.css";
import axiosClient from "@/api-client/axios-client";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  //every change route this component will be re-render ( unmount and mount )
  const Layout = Component.Layout ?? EmptyLayout;

  return (
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
  );
}
