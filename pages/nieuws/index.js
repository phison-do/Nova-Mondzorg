import { Header } from "@/src/components/Header/Header";
import { Layout } from "@/src/components/Layout";
import { NewsOverview } from "@/src/components/NewsOverview/NewsOverview";
import { getAllNews } from "@/src/queries/getNewsPosts";

const News = ({ data }) => {
  if (!data) return null;

  const { title, content, featuredImage } = data.page;

  return (
    <Layout
      header={data.headerMenus.edges}
      footer={data.footerMenus.edges}
      footerData={data.getFooter.sidebarOne}
    >
      <Header
        imageSrc={featuredImage?.node?.mediaItemUrl}
        title={title}
        content={content}
      />
      <NewsOverview items={data.posts?.edges} />
    </Layout>
  );
};

export default News;

export const getStaticProps = async () => {
  const data = await getAllNews("nieuws");

  return {
    props: {
      data: data || {},
    },
  };
};
