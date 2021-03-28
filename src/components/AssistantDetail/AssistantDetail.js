import parse from "html-react-parser";

import { Wrapper, Picture, Content } from "./AssistantDetail.styled";

export const AssistantDetail = ({ img, title, content }) => {
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
