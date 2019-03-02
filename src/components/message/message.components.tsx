import styled from '@emotion/styled';
import { box } from '../styles';
import { theme } from '../../theme';

export const Card = styled.div`
  ${box}
  display: inline-block;
`;

export const Header = 'div';

export const Text = styled.pre`
  font-family: ${theme.fontFamily.primary};
  color: ${theme.colors.text.secondary};
  margin: 0.6rem 0 0;
`;

export const UserName = styled.span`
  font-weight: bold;
`;
