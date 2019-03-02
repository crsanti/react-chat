import React from 'react';
import { useValue } from '../customHooks';
import { FadeIn } from '../fade-in';
import { Button, Cover, Input, Modal, Title } from './username-form.components';

export const UsernameForm: React.StatelessComponent = () => {
  const { resetValue: emptyUsername, ...username } = useValue('');

  return (
    <Cover>
      <FadeIn>
        {(style) => (
          <Modal style={style}>
            <Title>Please enter your name</Title>
            <Input {...username} type="text" placeholder="Username" />
            <Button>Start chatting</Button>
          </Modal>
        )}
      </FadeIn>
    </Cover>
  );
};
