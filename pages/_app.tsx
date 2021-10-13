import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "@components";
import { globalsResolver } from "@utils";

function App({ Component, pageProps }: AppProps) {
  const { defaultMeta, logo, background, nav } = globalsResolver(
    pageProps.globals?.data
  );
  return (
    <>
      <Head>
        {defaultMeta.metaTitle && <title>{defaultMeta.metaTitle}</title>}
        {defaultMeta.metaDescription && (
          <>
            <meta name="description" content={defaultMeta.metaDescription} />
            <meta
              property="og:description"
              content={defaultMeta.metaDescription}
            />
          </>
        )}
        {defaultMeta.metaImage && (
          <meta property="og:image" content={defaultMeta.metaImage} />
        )}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Layout logo={logo} background={background} nav={nav}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
