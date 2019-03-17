import React from 'react';
import { ChatMessage } from '../../model';
import { Header, Layout, Text, UserName } from './message.components';

interface Props {
  message: ChatMessage;
}

export const Message: React.FunctionComponent<Props> = ({ message: { text, username } }) => {
  return (
    <Layout>
      <Header>
        <UserName>{username}</UserName>
      </Header>
      <Text>{text}</Text>
    </Layout>
  );
};
