import styled from '@emotion/styled';
import { theme } from '../../theme';
import { Card } from '../card';

export const Layout = styled(Card)`
  display: inline-block;
`;

export const Header = 'div';

export const Text = styled.pre`
  color: ${theme.colors.text.secondaryDark};
  font-family: ${theme.fontFamily.primary};
  margin: 0.6rem 0 0;
`;

export const UserName = styled.span`
  font-weight: bold;
`;
