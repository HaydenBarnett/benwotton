import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "@components";
import { globalsResolver } from "@utils";

function App({ Component, pageProps }: AppProps) {
  const { defaultMeta, logo, background, nav } = globalsResolver(
    pageProps.globals?.data,
    pageProps.pages
  );
  return (
    <>
      <Head>
        {defaultMeta.metaTitle && <title>{defaultMeta.metaTitle}</title>}
        {defaultMeta.metaDescription && (
          <meta
            property="og:description"
            content={defaultMeta.metaDescription}
          />
        )}
        {defaultMeta.metaImage && (
          <meta property="og:image" content={defaultMeta.metaImage} />
        )}
      </Head>
      <Layout logo={logo} background={background} nav={nav}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
