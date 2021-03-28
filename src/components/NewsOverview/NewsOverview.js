import Link from "next/link";
// import Head from "next/head";

import { Wrapper, List, ListItem } from "./NewsOverview.styled";

export const NewsOverview = ({ items }) => {
  return (
    <Wrapper>
      <List>
        {items.map((item) => (
          <ListItem key={item.node.id}>
            <Link
              href={{
                pathname: item.node.uri,
                query: { id: item.node.id },
              }}
              as={item.node.uri}
            >
              {item.node.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
