import { css, Global } from '@emotion/core';
import normalizeCSS from 'emotion-normalize';
import React from 'react';
import 'typeface-muli';
import { theme } from './theme';

const styles = css`
  ${normalizeCSS}
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.4rem;
    font-family: ${theme.fontFamily.primary};
    box-sizing: border-box;
  }

  html, body, #app {
    height: 100%;
  }

  #app {
    display: flex;
    flex-direction: column;
  }
`;

export const GlobalStyles = (
  <Global styles={styles} />
);