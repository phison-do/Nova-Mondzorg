import { Global, css, useTheme } from "@emotion/react";

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        body {
          ${theme.font.base};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h1,
        h2,
        h3,
        h4 {
          ${theme.font.title};
          font-weight: normal;
        }

        h1 {
          font-size: 36px;
          line-height: 1.2;
          margin: 0 0 20px;
          padding: 0;

          ${theme.mediaQueries.tablet} {
            font-size: 42px;
            line-height: 42px;
            margin-bottom: 32px;
          }

          ${theme.mediaQueries.large} {
            font-size: 42px;
            line-height: 1;
          }

          ${theme.mediaQueries.xlarge} {
            font-size: 105px;
            line-height: 1;
          }
        }

        h2 {
          font-size: 28px;
          line-height: 1.2;
          margin: 0 0 20px;
          padding: 0;

          ${theme.mediaQueries.large} {
            font-size: 36px;
          }
        }

        h3 {
          font-size: 18px;
          line-height: 1.4;
          margin: 0 0 20px;

          ${theme.mediaQueries.tablet} {
            font-size: 18px;
            line-height: 24px;
          }

          ${theme.mediaQueries.large} {
            font-size: 18px;
            line-height: 1;
          }

          ${theme.mediaQueries.xlarge} {
            font-size: 20px;
          }
        }

        h4 {
          font-size: 16px;
          line-height: 1.2;
          margin: 0 0 20px;

          ${theme.mediaQueries.tablet} {
            font-size: 20px;
          }
        }

        p {
          margin: 0 0 20px;
          font-weight: 400;
        }

        img {
          vertical-align: middle;
        }
      `}
    />
  );
};
