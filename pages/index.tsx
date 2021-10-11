import Head from "next/head";
import { GetStaticProps } from "next";
import { Header } from "@components";
import { Client, globalsResolver, projectsResolver } from "@utils";

type HomeProps = {
  pages?: any;
  globals?: any;
  projects?: any;
};

const Home = ({ pages, globals, projects }: HomeProps) => {
  const { defaultMeta, logo, nav } = globalsResolver(globals?.data, pages);
  return (
    <>
      <Head>
        <title>{defaultMeta.metaTitle}</title>
        <meta property="og:description" content={defaultMeta.metaDescription} />
        <meta property="og:image" content={defaultMeta.metaImage} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header logo={logo} nav={nav} fullscreen={true} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = Client();
  const response = await client.query("");
  const pages = response.results.filter((doc) => doc.type === "page");
  const globals = response.results.filter((doc) => doc.type === "globals")[0];
  const projects = response.results.filter((doc) => doc.type === "project");
  return {
    props: {
      pages,
      globals,
      projects,
    },
  };
};

export default Home;
