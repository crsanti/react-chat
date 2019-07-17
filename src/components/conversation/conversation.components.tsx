import styled from '@emotion/styled';
import { animated } from 'react-spring';

export const Layout = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

export const List = styled.ul`
  flex-grow: 1;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding: 3.2rem 0 0;
`;

const Row = styled.li`
  &:not(:last-child) {
    padding-bottom: 2.2rem;
  }
`;

export const AnimatedRow = animated(Row);
