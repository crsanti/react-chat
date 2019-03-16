import isEmpty from 'ramda/es/isEmpty';
import React, { useCallback } from 'react';
import { useValue } from '../../hooks';
import { UsernameStatus } from '../../model';
import { FadeIn } from '../fade-in';
import { Button, Cover, ErrorMessage, Form, Input, Modal, Spinner, Title } from './username-form.components';

interface Props {
  status: UsernameStatus;
  error: string;
  onSubmit(username: string): void;
}

const success = (status: UsernameStatus, error: string) => isEmpty(error) && status === 'done';
const renderButtonContent = (status: UsernameStatus, isSuccess: boolean) => {
  if (isSuccess) {
    return 'Welcome!';
  }

  if (status === 'sending') {
    return <Spinner size={20} />;
  }

  return 'Start chatting';
};

export const UsernameForm: React.StatelessComponent<Props> = ({ onSubmit, status, error }) => {
  const { reset: emptyUsername, value: username, onChange } = useValue('');
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(username.trim());
    emptyUsername();
  }, [username]);
  const isSuccess = success(status, error);
  const isSending = status === 'sending';

  return (
    <FadeIn active={!isSuccess}>
      {(style) => (
        <Cover>
          <Modal style={style}>
            <Form onSubmit={handleSubmit}>
              <Title>Please enter your name</Title>
              <Input value={username} onChange={onChange} disabled={isSending || isSuccess} placeholder="Username" />
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <Button status={status} username={username} disabled={isSending || isEmpty(username)}>
                {renderButtonContent(status, isSuccess)}
              </Button>
            </Form>
          </Modal>
        </Cover>
      )}
    </FadeIn>
  );
};
