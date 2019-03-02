import React from 'react';
import { useValue } from '../customHooks';
import { FadeIn } from '../fade-in';
import { Button, Cover, Input, Modal, Title, Form } from './username-form.components';

interface Props {
  isVisible: boolean;
  onSubmit(username: string): void;
}

export const UsernameForm: React.StatelessComponent<Props> = ({ onSubmit, isVisible }) => {
  const { reset: emptyUsername, ...username } = useValue('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(username.value.trim());
    emptyUsername();
  };

  return (
    <FadeIn active={isVisible}>
      {(style) => (
        <Cover>
          <Modal style={style}>
            <Form onSubmit={handleSubmit}>
              <Title>Please enter your name</Title>
              <Input {...username} type="text" placeholder="Username" />
              <Button>Start chatting</Button>
            </Form>
          </Modal>
        </Cover>
      )}
    </FadeIn>
  );
};
