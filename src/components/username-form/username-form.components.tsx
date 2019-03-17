import css from '@emotion/css';
import styled from '@emotion/styled';
import { CircularProgress } from '@material-ui/core';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import { animated } from 'react-spring';
import { textBox } from '../../styles';
import { theme } from '../../theme';
import { Card } from '../card';

export const FullPageCover = styled.div`
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
  position: relative;
  min-height: 16rem;
`;

export const TransitionWrapper = styled(animated.div)`
  bottom: 0;
  left: 0;
  padding: inherit;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${() => ErrorMessage} + ${() => Button} {
    margin: 2rem 0 1.2rem;
  }
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
  padding: 1.2rem 0 0.8rem;
  transition: border 200ms ${theme.animations.standardEasing};

  &:focus {
    border-color: ${theme.colors.text.primaryDark};
  }
`;

export const ErrorMessage = styled.small`
  margin: 0.8rem 0 0;
  min-height: 1.2rem;
  color: ${theme.colors.text.error};
`;

export const Button = styled.button<{ fullWidth: boolean }>`
  background-image: linear-gradient(${theme.colors.gradients.primary.top} ${10 / 3}%, ${theme.colors.gradients.primary.bottom} 100%);
  border-color: transparent;
  border-radius: 4rem;
  color: ${theme.colors.text.primaryLight};
  cursor: pointer;
  font-weight: bold;
  height: 4rem;
  margin: 4rem 0 0;
  padding: 0;
  transition: width ${theme.animations.standardEasing} 400ms, opacity ${theme.animations.standardEasing} 200ms;
  align-self: center;
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
  }

  ${({ fullWidth }) => fullWidth ?
    css`width: 4rem;`
    : block
  }
`;

const InnerSpinner: React.FunctionComponent<CircularProgressProps> = (props) => (
  <CircularProgress classes={{ circle: 'circle' }} {...props} />
);
export const Spinner = styled(InnerSpinner)`
  & .circle {
    color: ${theme.colors.background.card};
  }
`;

export const Panel = styled(animated.div)`
  /* padding: inherit;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute; */
`;
