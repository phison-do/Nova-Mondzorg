import React from "react";
import { HeaderIntro } from "./HeaderIntro";

import { Wrapper, Hero, HeaderContent } from "./Header.styled";

export const Header = ({ imageSrc, title, content }) => {
  return (
    <Wrapper>
      <Hero>
        <img src={imageSrc} alt="" />
      </Hero>

      <HeaderContent>
        {title && content && <HeaderIntro title={title} txt={content} />}
      </HeaderContent>
    </Wrapper>
  );
};
