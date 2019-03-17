import css from '@emotion/css';
import styled from '@emotion/styled';
import { CircularProgress } from '@material-ui/core';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import { animated } from 'react-spring';
import { textBox } from '../../styles';
import { theme } from '../../theme';
import { Card } from '../card';

export const FullPageCover = styled(animated.div)`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const Title = styled.h3`
  margin: 0 0 1.6rem;
`;

export const Modal = styled(Card)`
  box-shadow: ${theme.components.modal.boxShadow};
  flex-grow: 1;
  margin: 4.8rem;
  max-width: 400px;
  min-height: 16rem;
  position: relative;
`;

export const TransitionWrapper = styled(animated.div)`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: inherit;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Form = styled.form`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const block = css`
  display: block;
  width: 100%;
`;

export const Input = styled.input`
  ${block}
  ${textBox}
  border-color: ${theme.colors.text.disabled};
  border-style: solid;
  border-width: 0 0 0.1rem 0;
  box-sizing: border-box;
  padding: 1.1rem 0 0.8rem;
  transition: border 200ms ${theme.animations.standardEasing};

  &:focus {
    border-color: ${theme.colors.text.primaryDark};
  }
`;

export const ErrorMessage = styled.small`
  color: ${theme.colors.text.error};
  margin: 0.8rem 0 0;
  min-height: 1.2rem;
`;

export const Button = styled.button<{fullWidth: boolean}>`
  align-self: center;
  background-image: linear-gradient(${theme.colors.gradients.primary.top} ${10 / 3}%, ${theme.colors.gradients.primary.bottom} 100%);
  border-color: transparent;
  border-radius: 4rem;
  color: ${theme.colors.text.primaryLight};
  cursor: pointer;
  font-weight: bold;
  height: 4rem;
  margin: auto 0 1.2rem;
  overflow: hidden;
  padding: 0;
  transition: width ${theme.animations.standardEasing} 400ms, opacity ${theme.animations.standardEasing} 200ms;
  white-space: nowrap;
  word-break: keep-all;

  ${({ fullWidth }) => fullWidth ? css`width: 4rem;` : block}
`;

const InnerSpinner: React.FunctionComponent<CircularProgressProps> = (props) => (
  <CircularProgress classes={{ circle: 'circle' }} {...props} />
);
export const Spinner = styled(InnerSpinner)`
  & .circle {
    color: ${theme.colors.background.card};
  }
`;

export const Welcome = styled(animated.div)`
  font-size: 2.4rem;
`;
