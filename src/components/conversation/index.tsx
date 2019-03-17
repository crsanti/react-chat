import React, { useEffect, useRef } from 'react';
import { ChatMessage } from '../../model';
import { FadeIn } from '../fade-in';
import { Message } from '../Message';
import { AnimatedRow, Layout, List } from './conversation.components';

interface Props {
  messages: ChatMessage[];
}

export const Conversation: React.FunctionComponent<Props> = ({ messages }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Layout ref={ref}>
      <List>
        {messages.map((message) => (
          <FadeIn fromTop key={message.id}>
            {(style) => (
              <AnimatedRow style={style}>
                <Message message={message} />
              </AnimatedRow>
            )}
          </FadeIn>
        ))}
      </List>
    </Layout>
  );
};
