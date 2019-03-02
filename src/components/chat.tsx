import React, { useState } from 'react';
import { Layout } from './chat.components';
import { MessageInput } from './message-input';
import { Conversation } from './conversation';
import { ChatMessage } from '../model';
import uuid from 'uuid/v4';
import { UsernameForm } from './username-form';

export const Chat: React.StatelessComponent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const addMessage = (text: string) => {
    setMessages([...messages, { id: uuid(), text }]);
  };

  return (
    <Layout>
      <UsernameForm />
      <Conversation messages={messages} />
      <MessageInput disabled={false} addMessage={addMessage} />
    </Layout>
  );
};
