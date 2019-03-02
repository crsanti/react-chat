import styled from '@emotion/styled';
import { Card } from '../card';
import { theme } from '../../theme';
import css from '@emotion/css';
import { textBox } from '../../styles';

export const Cover = styled.div`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Modal = styled(Card)`
  box-shadow: ${theme.components.modal.boxShadow};
  flex-grow: 1;
  margin: 4.8rem;
  max-width: 400px;
`;

const block = css`
  display: block;
  flex-grow: 1;
`;

export const Input = styled.input`
  ${block}
  ${textBox}
  border-color: ${theme.colors.text.disabled};
  border-style: solid;
  border-width: 0 0 0.1rem 0;
  box-sizing: border-box;
  margin-bottom: 3.2rem;
  padding: 1.2rem 0 0.8rem;
  transition: border 200ms ${theme.animations.standardEasing};

  &:focus {
    border-color: ${theme.colors.text.primaryDark};
  }
`;

export const Button = styled.button`
  ${block}
  background-image: linear-gradient(${theme.colors.gradients.primary.top} ${10 / 3}%, ${theme.colors.gradients.primary.bottom} 100%);
  border-color: transparent;
  border-radius: 4rem;
  color: ${theme.colors.text.primaryLight};
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 1.2rem;
  padding: 1.2rem;
`;
