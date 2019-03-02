import React, { useEffect, useRef } from 'react';
import { ChatMessage } from '../../model';
import { FadeIn } from '../fade-in';
import { Message } from '../Message';
import { AnimatedRow, Layout, List } from './conversation.components';

interface Props {
  messages: ChatMessage[];
}

export const Conversation: React.StatelessComponent<Props> = ({ messages }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Layout ref={ref}>
      <List>
        {messages.map(({ id: key, text }) => (
          <FadeIn fromTop key={key}>
            {(style) => (
              <AnimatedRow style={style}>
                <Message text={text} />
              </AnimatedRow>
            )}
          </FadeIn>
        ))}
      </List>
    </Layout>
  );
};
