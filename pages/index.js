import { getHomePage } from "@/src/queries/getHomePage";
import { Header } from "@/src/components/Header/Header";
import { Layout } from "@/src/components/Layout/Layout";
import { News } from "@/src/components/News/News";
import { Dentists } from "@/src/components/Dentists/Dentists";

export default function Home({ data }) {
  if (!data) return null;

  return (
    <Layout
      header={data.headerMenus.edges}
      footer={data.footerMenus.edges}
      footerData={data.getFooter.sidebarOne}
    >
      <Header
        imageSrc={data.page?.featuredImage?.node?.mediaItemUrl}
        title={data.page?.title}
        content={data.page?.content}
      />
      <Dentists items={data.pages.edges} />
      <News items={data.posts.edges} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await getHomePage("home");

  return {
    props: {
      data: data || {},
    },
  };
};
