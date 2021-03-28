import { useRef, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import parse from "html-react-parser";
import Head from "next/head";

import {
  Wrapper,
  Header,
  ListItem,
  ListContent,
  ArrowButton,
  Inner,
  ListParagraph,
  Dots,
  DotsList,
  DotsListItem,
  Picture,
} from "./News.styled";

const isMobile = process.browser.innerWidth < 768;

export const News = ({ items }) => {
  const sliderRef = useRef();
  const [index, setIndex] = useState(0);

  if (!items?.length) return null;

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const beforeChange = (next) => {
    setIndex(next);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: isMobile ? 1 : 3,
    speed: 600,
    beforeChange,
  };

  const dotItems = [...new Array(items.length + 1 - settings.slidesToShow)];

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Head>
      <Wrapper>
        <Header>
          {items.length > settings.slidesToShow && (
            <ArrowButton type="left" onClick={previous} disabled={index === 0}>
              <img src="/icons/arrow-right.svg" alt="Vorige" />
            </ArrowButton>
          )}
          <h2>Nieuws</h2>
          {items.length > settings.slidesToShow && (
            <ArrowButton
              onClick={next}
              disabled={index === items.length - settings.slidesToShow}
            >
              <img src="/icons/arrow-right.svg" alt="Volgende" />
            </ArrowButton>
          )}
        </Header>

        <Slider {...settings} ref={sliderRef}>
          {items.map((item, i) => (
            <ListItem key={item.id || i}>
              <Inner>
                {item.node?.featuredImage?.node?.mediaItemUrl && (
                  <Picture>
                    <img
                      src={item.node.featuredImage.node.mediaItemUrl}
                      alt={
                        item.node.featuredImage.node.mediaItemUrl ||
                        "Assistente"
                      }
                    />
                  </Picture>
                )}
                <ListContent>
                  <h3>{item.node.title}</h3>
                  <ListParagraph>{parse(item.node.excerpt)}</ListParagraph>
                  <Link
                    href={{
                      pathname: item.node.uri,
                      query: { id: item.node.id },
                    }}
                    as={item.node.uri}
                  >
                    {item.node.title}
                  </Link>
                </ListContent>
              </Inner>
            </ListItem>
          ))}
        </Slider>

        {items.length > settings.slidesToShow && (
          <Dots>
            <DotsList>
              {dotItems.map((item, i) => (
                <DotsListItem key={i} active={(i === index).toString()} />
              ))}
            </DotsList>
          </Dots>
        )}
      </Wrapper>
    </>
  );
};
