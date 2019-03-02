import React, { useEffect, useRef } from 'react';
import { useTransition } from 'react-spring';
import { ChatMessage } from '../../model';
import { Message } from '../Message';
import { AnimatedRow, Layout, List } from './conversation.components';

interface Props {
  messages: ChatMessage[];
}

const transitionDefinition = {
  from: { opacity: 0, transform: 'translate3d(0, -2.2rem, 0)' },
  enter: { opacity: 1, transform: 'translate3d(0, 0rem, 0)' },
};

export const Conversation: React.StatelessComponent<Props> = ({ messages }) => {
  const transitions = useTransition(messages, ({ id }) => id, transitionDefinition);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Layout ref={ref}>
      <List>
        {transitions.map(({ item: { text }, key, props }) =>
          <AnimatedRow key={key} style={props}>
            <Message text={text} />
          </AnimatedRow>,
        )}
      </List>
    </Layout>
  );
};
