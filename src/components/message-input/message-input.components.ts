import styled from '@emotion/styled';
import ResizableTextArea from 'react-autosize-textarea';
import { textBox } from '../../styles';
import { Card } from '../card';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-top: 2.2rem;
  width: 100%;
`;

// NOTE: Types from emotion are really a pain in the ass
const TextAreaCard = Card.withComponent(ResizableTextArea) as any as typeof ResizableTextArea;

export const TextArea = styled(TextAreaCard)`
  ${textBox}
  flex-grow: 1;
  overflow-y: auto;
  resize: none;
`;
