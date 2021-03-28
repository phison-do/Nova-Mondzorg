import Link from "next/link";
// import Head from "next/head";
import parse from "html-react-parser";

import { Wrapper, Picture, Content } from "./NewsDetail.styled";

export const NewsDetail = ({ img, title, content }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <Picture>
        <img src={img.node.mediaItemUrl} alt={img.node?.altText} />
      </Picture>
      <Content>{parse(content)}</Content>
    </Wrapper>
  );
};
