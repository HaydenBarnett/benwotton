import { Client } from "./prismicHelpers";

const fetchDocs: any = async (page = 1, routes = []) => {
  const response = await Client().query("", {
    pageSize: 200,
    lang: "*",
    page,
  });
  const allRoutes = [...routes, ...response.results];
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  return [...Array.from(new Set(allRoutes))];
};

export const queryRepeatableDocuments = async (filter: any) => {
  const allRoutes = await fetchDocs();
  return allRoutes.filter(filter);
};
