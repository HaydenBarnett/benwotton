import Head from "next/head";
import * as PrismicTypes from "@prismicio/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { SliceZone } from "@components";
import {
  Client,
  queryRepeatableDocuments,
  pageResolver,
  projectsResolver,
} from "@utils";

type PageProps = {
  page?: any;
  projects?: any;
};

const Page = ({ page, projects }: PageProps) => {
  if (page?.data) {
    const { meta, slices } = pageResolver(page?.data);
    const allProjects = projectsResolver(projects);
    return (
      <>
        <Head>
          {meta.metaTitle && <title>{meta.metaTitle}</title>}
          {meta.metaDescription && (
            <meta property="og:description" content={meta.metaDescription} />
          )}
        </Head>
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
    (doc) => doc.uid === context?.params?.uid
  )[0];
  const globals = response.results.filter((doc) => doc.type === "globals")[0];
  const projects = response.results.filter((doc) => doc.type === "project");
  return {
    props: {
      page,
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
