import { isEmpty } from 'ramda';
import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { ChatMessage } from '../model';
import { Layout } from './chat.components';
import { Conversation } from './conversation';
import { MessageInput } from './message-input';
import { UsernameForm } from './username-form';

export const Chat: React.StatelessComponent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [username, setUsername] = useState<string>('');
  const missingUsername = isEmpty(username);
  const addMessage = (text: string) => {
    setMessages([...messages, { id: uuid(), text, username }]);
  };

  return (
    <Layout>
      <UsernameForm isVisible={missingUsername} onSubmit={setUsername} />
      <Conversation messages={messages} />
      <MessageInput disabled={missingUsername} addMessage={addMessage} />
    </Layout>
  );
};
