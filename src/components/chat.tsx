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
  const [{ username, error, status }, setUsername] = useState<UsernameState>({ username: '', error: '', status: 'pristine' });
  const missingUsername = isEmpty(username);
  const addMessage = (text: string) => {
  const addMessage = useCallback((text: string) => {
    setMessages([...messages, { id: uuid(), text, username }]);
  }, [messages, username]);

  const onSubmit = useCallback((newUsername: string) => {
    setUsername({ username: newUsername, error: '', status: 'sending' });
    setTimeout(() => {
      setUsername({ username: newUsername, error: '', status: 'done' });
    }, 2000);
  }, []);
  return (
    <Layout>
      <UsernameForm isVisible={missingUsername} onSubmit={setUsername} />
      <Conversation messages={messages} />
      <MessageInput disabled={missingUsername} addMessage={addMessage} />
    </Layout>
  );
};
