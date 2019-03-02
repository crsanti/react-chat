import styled from '@emotion/styled';
import { theme } from '../theme';

export const Layout = styled.div`
  background-color: ${theme.colors.background.layout};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: calc(100% - 3.2rem);
  padding: 0 6.4rem 3.2rem;
`;
