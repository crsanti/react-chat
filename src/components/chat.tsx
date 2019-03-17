import React, { useCallback, useState } from 'react';
import uuid from 'uuid/v4';
import { ChatMessage, isSuccessUsernameState, UsernameState, SuccessUsernameState } from '../model';
import { Layout } from './chat.components';
import { Conversation } from './conversation';
import { MessageInput } from './message-input';
import { UsernameForm } from './username-form';

export const Chat: React.FunctionComponent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [usernameState, setUsernameState] = useState<UsernameState>({ type: 'idle' });
  const isSuccess = isSuccessUsernameState(usernameState);
  const addMessage = useCallback((text: string) => {
    if (isSuccess) {
      setMessages([
        ...messages,
        { id: uuid(), text, username: (usernameState as SuccessUsernameState).username },
      ]);
    }
  }, [messages, usernameState]);

  const onSubmit = useCallback((_newUsername: string) => {
    setUsernameState({ type: 'loading' });
    setTimeout(() => {
      setUsernameState({ type: 'success', username: _newUsername });
      // setUsernameState({ type: 'error', error: 'The username is taken' });
    }, 2000);
  }, []);

  return (
    <Layout>
      <UsernameForm usernameState={usernameState} onSubmit={onSubmit} />
      <Conversation messages={messages} />
      <MessageInput disabled={!isSuccess} addMessage={addMessage} />
    </Layout>
  );
};
