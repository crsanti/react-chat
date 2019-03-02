import css from '@emotion/css';
import { theme } from './theme';

export const textBox = css`
  color: ${theme.colors.text.primaryDark};
  outline: none;

   &:disabled, &::placeholder {
    color: ${theme.colors.text.disabled};
  }
`;
