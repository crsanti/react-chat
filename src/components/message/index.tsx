import React from 'react';
import { Layout, Header, Text, UserName } from './message.components';

interface Props {
  text: string;
}

export const Message: React.StatelessComponent<Props> = ({ text }) => {
  return (
    <Layout>
      <Header>
        <UserName>Matt Thompson</UserName>
      </Header>
      <Text>{text}</Text>
    </Layout>
  );
};
