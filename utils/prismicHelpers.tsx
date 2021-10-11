import Prismic from "@prismicio/client";
import Link from "next/link";
import {
  API_ENDPOINT,
  API_TOKEN,
  linkResolver,
  hrefResolver,
} from "../prismic-config";

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
  <Link
    key={element.data.id}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
);

const createClientOptions = (req = null, prismicAccessToken = "") => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

export const Client = (req = null) =>
  Prismic.client(API_ENDPOINT, createClientOptions(req, API_TOKEN));

export default Client;
