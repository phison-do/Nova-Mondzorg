import client from "@/src/apollo/client";
import { Layout } from "@/src/components/Layout";
import { GET_ALL_PAGES_URI } from "@/src/queries/getPages";
import { getAssistants } from "@/src/queries/getAssistants";
import { AssistantDetail } from "@/src/components/AssistantDetail/AssistantDetail";

const Assistant = ({ data }) => {
  if (!data) return null;

  return (
    <Layout
      header={data.headerMenus.edges}
      footer={data.footerMenus.edges}
      footerData={data.getFooter.sidebarOne}
    >
      <AssistantDetail
        img={data.post.featuredImage}
        title={data.post.title}
        content={data.post.content}
      />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_ALL_PAGES_URI,
  });

  const paths = [];

  data?.dentists?.edges?.map((page) => {
    data?.assistants?.edges.map((post) => {
      paths.push({
        params: { dentist: page.node.slug, assistant: post.node.slug },
      });
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export default Assistant;

export const getStaticProps = async ({ params }) => {
  const { assistant } = params;
  const data = await getAssistants(assistant);

  return {
    props: {
      data: data || {},
    },
  };
};
