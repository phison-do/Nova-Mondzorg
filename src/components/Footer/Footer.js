import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

import {
  Wrapper,
  List,
  ListItem,
  Logo,
  CopyRight,
  FooterContent,
  LinksWrapper,
  LinksColumn,
  Address,
} from "./Footer.styled";

export const Footer = ({ items, data }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Wrapper>
        <Address>
          <Link as={`/`} href="/">
            <Logo
              className="logo"
              src={"/logo-novamondzorg.png"}
              alt="Nova Mondzorg"
            />
          </Link>
          {parse(data)}
        </Address>

        <FooterContent>
          <LinksWrapper>
            <LinksColumn>
              <h4>Direct naar</h4>
              <List>
                {items.map((item) => (
                  <ListItem key={item.node.id}>
                    <Link href={item.node.path}>{item.node.label}</Link>
                  </ListItem>
                ))}
              </List>
            </LinksColumn>
            <LinksColumn>
              <h4>Onze tandartsen</h4>
              <List>
                {items.map((item) => (
                  <ListItem key={item.node.id}>
                    <Link href={item.node.path}>{item.node.label}</Link>
                  </ListItem>
                ))}
              </List>
            </LinksColumn>
          </LinksWrapper>
        </FooterContent>
      </Wrapper>
      <CopyRight>
        <p>© NOVAMONDZORG {currentYear}</p>
      </CopyRight>
    </>
  );
};
