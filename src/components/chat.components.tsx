import styled from '@emotion/styled';
import { theme } from '../theme';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 6.4rem 3.2rem;
  max-height: calc(100% - 3.2rem);
  background-color: ${theme.colors.background.layout};
`;
