import { GetStaticProps } from "next";
import { Client } from "@utils";

const Error404 = () => {
  return null;
};

export const getStaticProps: GetStaticProps = async () => {
  const client = Client();
  const response = await client.get({
    pageSize: 200,
  });
  const globals = response.results.filter((doc) => doc.type === "globals")[0];
  const customGlobals = {
    ...globals,
    data: {
      ...globals?.data,
      job_title: "Not the page you're looking for",
      name: "Error 404",
    },
  };
  return {
    props: {
      globals: customGlobals,
    },
  };
};

export default Error404;
