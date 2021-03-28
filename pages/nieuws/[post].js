// import { Header } from "../../src/components/Header/Header";
import { Layout } from "../../src/components/Layout";
import { getAllNewsPaths, getNewsPosts } from "../../src/queries/getNewsPosts";
import { NewsDetail } from "../../src/components/NewsDetail/NewsDetail";

const Post = ({ data }) => {
  if (!data) return null;

  return (
    <Layout
      header={data.headerMenus.edges}
      footer={data.footerMenus.edges}
      footerData={data.getFooter.sidebarOne}
    >
      <NewsDetail
        img={data.post?.featuredImage}
        title={data.post.title}
        content={data.post.content}
      />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const data = await getAllNewsPaths("nieuws");

  const paths = [];

  data?.posts?.edges?.map((post) => {
    paths.push({
      params: { post: post.node.slug },
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const data = await getNewsPosts(params.post);

  return {
    props: {
      data: data || {},
    },
  };
};
