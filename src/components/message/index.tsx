import React from 'react';
import { Card, Header, Text, UserName } from './message.components';

interface Props {
  text: string;
}

export const Message: React.StatelessComponent<Props> = ({ text }) => {
  return (
    <Card>
      <Header>
        <UserName>Matt Thompson</UserName>
      </Header>
      <Text>{text}</Text>
    </Card>
  );
};
