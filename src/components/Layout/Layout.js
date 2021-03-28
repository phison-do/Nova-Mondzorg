import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation";

import { Wrapper } from "./Layout.styled";

export const Layout = ({ header, footer, footerData, children }) => {
  return (
    <Wrapper>
      <Navigation items={header} />
      {children}
      <Footer items={footer} data={footerData} />
    </Wrapper>
  );
};
