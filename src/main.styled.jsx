import { css } from '@emotion/react';

export const GlobalCSS = css`
  html {
    scrollbar-gutter: stable;
  }

  body {
    background-color: var(--main-bg-color);

    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    color: var(--gray-color);

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 1.5;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  input {
    font-family: inherit;
  }
`;
