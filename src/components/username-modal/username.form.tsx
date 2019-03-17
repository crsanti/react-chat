import { isEmpty } from 'ramda';
import React, { useCallback } from 'react';
import { useValue } from '../../hooks';
import { isFailureUsernameState, isInitialState, isLoadingUsernameState, isSuccessUsernameState, UsernameState } from '../../model';
import { Button, ErrorMessage, Form, Input, Spinner, Title } from './username-modal.components';

interface Props {
  usernameState: UsernameState;
  onSubmit(username: string): void;
}

export const UsernameForm: React.FunctionComponent<Props> = ({ onSubmit, usernameState }) => {
  const { reset: emptyUsername, value: username, onChange } = useValue('');
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(username.trim());
    emptyUsername();
  }, [username]);
  const isFailure = isFailureUsernameState(usernameState);
  const canShowButtonText = isInitialState(usernameState) || isFailure;
  const isLoading = isLoadingUsernameState(usernameState);
  const isEmptyUsername = isEmpty(username);

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Please enter your name</Title>
      <Input
        required={isSuccessUsernameState(usernameState)}
        disabled={isLoading}
        onChange={onChange}
        placeholder="Username"
        value={username}
      />
      {isFailureUsernameState(usernameState) &&
        <ErrorMessage>{usernameState.error}</ErrorMessage>}
      <Button fullWidth={!canShowButtonText} disabled={isLoading || isEmptyUsername}>
        {canShowButtonText ?
          'Start chatting' :
          <Spinner size={20} />
        }
      </Button>
    </Form>
  );
};
