import Link from "next/link";

import { Wrapper, List, ListItem } from "./Dentists.styled";

export const Dentists = ({ items }) => {
  const list = items.filter(
    (item) => item.node.isFrontPage === false && item.node.slug !== "nieuws"
  );

  return (
    <Wrapper>
      <h2>Uw tandarts</h2>
      <List>
        {list.map((item, i) => (
          <ListItem key={item.id || i}>
            {item.node.featuredImage.node.mediaItemUrl && (
              <Link href={`${item.node.uri}`} passHref>
                <a>
                  <picture>
                    <img
                      src={item.node.featuredImage.node.mediaItemUrl}
                      alt={
                        item.node.featuredImage.node.mediaItemUrl ||
                        "Assistente"
                      }
                    />
                  </picture>
                  <h3>{item.node.title}</h3>
                </a>
              </Link>
            )}
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
