import Head from "next/head";
import * as PrismicTypes from "@prismicio/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header, SliceZone } from "@components";
import {
  Client,
  queryRepeatableDocuments,
  globalsResolver,
  pageResolver,
  projectsResolver,
} from "@utils";

type PageProps = {
  page?: any;
  pages?: any;
  globals?: any;
  projects?: any;
};

const Page = ({ page, pages, globals, projects }: PageProps) => {
  if (page?.data) {
    const { defaultMeta, logo, nav } = globalsResolver(globals?.data, pages);
    const { meta, slices } = pageResolver(page?.data);
    const allProjects = projectsResolver(projects);
    return (
      <>
        <Head>
          <title>{meta.metaTitle ?? defaultMeta.metaTitle}</title>
          <meta
            property="og:description"
            content={meta.metaDescription ?? defaultMeta.metaDescription}
          />
          <meta property="og:image" content={defaultMeta.metaImage} />
        </Head>
        <Header logo={logo} nav={nav} fullscreen={false} />
        <SliceZone slices={slices} projects={allProjects} />
      </>
    );
  }
  return null;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = Client();
  const response = await client.query("");
  const page = response.results.filter(
    (doc) => doc.uid === context.params.uid
  )[0];
  const pages = response.results.filter((doc) => doc.type === "page");
  const globals = response.results.filter((doc) => doc.type === "globals")[0];
  const projects = response.results.filter((doc) => doc.type === "project");
  return {
    props: {
      page,
      pages,
      globals,
      projects,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await queryRepeatableDocuments(
    (doc: PrismicTypes.PrismicDocument) => doc.type === "page"
  );
  return {
    paths: pages.map((page: PrismicTypes.PrismicDocument) => `/${page.uid}`),
    fallback: true,
  };
};

export default Page;
