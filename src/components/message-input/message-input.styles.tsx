import css from '@emotion/css';
import { theme } from '../../theme';
import { box } from '../styles';

export const textarea = css`
  ${box}
  color: ${theme.colors.text.secondary};
  flex-grow: 1;
  outline: none;
  overflow-y: auto;
  resize: none;
`;
