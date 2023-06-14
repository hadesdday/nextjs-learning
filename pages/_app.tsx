import { EmptyLayout } from "@/components/layout";
import { AppPropsWithLayout } from "@/models";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  //every change route this component will be re-render ( unmount and mount )
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
