import Prismic from "@prismicio/client";
import { API_ENDPOINT, API_TOKEN } from "../prismic-config";

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
