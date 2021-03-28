import { Assistants } from "../../src/components/Assistants/Assistants";
import { Header } from "../../src/components/Header/Header";
import { Layout } from "../../src/components/Layout";
import { getDentists, getDentistsUri } from "../../src/queries/getPages";

const Dentist = ({ data }) => {
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
      <Assistants items={data.posts?.edges} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const data = await getDentistsUri("dentist");

  const paths = [];

  data?.pages?.edges
    ?.filter((page) => page.node.dentistsPages.isDentist === true)
    .map((page) => {
      paths.push({
        params: { dentist: page.node.slug },
      });
    });

  return {
    paths: paths,
    fallback: false,
  };
};

export default Dentist;

export const getStaticProps = async ({ params }) => {
  const { dentist } = params;
  const data = await getDentists(dentist);

  return {
    props: {
      data: data || {},
    },
  };
};
