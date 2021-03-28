import Link from "next/link";
import { useRouter } from "next/router";
import {
  Wrapper,
  List,
  ListItem,
  Nav,
  LogoWrapper,
  Logo,
} from "./Navigation.styled";

export const Navigation = ({ items }) => {
  const router = useRouter();

  return (
    <Wrapper>
      <LogoWrapper>
        <Link as={`/`} href="/">
          <Logo
            className="logo"
            src={"/logo-novamondzorg.png"}
            alt="Nova Mondzorg"
          />
        </Link>
      </LogoWrapper>
      <Nav>
        <List>
          {items.map((item) => (
            <ListItem
              key={item.node.id}
              active={item.node.path.slice(0, -1) === router.asPath}
            >
              <Link href={item.node.path}>{item.node.label}</Link>
            </ListItem>
          ))}
        </List>
      </Nav>
    </Wrapper>
  );
};
