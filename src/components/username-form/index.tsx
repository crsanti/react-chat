import isEmpty from 'ramda/es/isEmpty';
import React, { useCallback } from 'react';
import { useTransition } from 'react-spring';
import { useValue } from '../../hooks';
import { isFailureUsernameState, isInitialState, isLoadingUsernameState, isSuccessUsernameState, UsernameState } from '../../model';
import { Button, ErrorMessage, Form, FullPageCover, Input, Modal, Panel, Spinner, Title, TransitionWrapper } from './username-form.components';

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

  const isLoading = isLoadingUsernameState(usernameState);
  const isInitial = isInitialState(usernameState);
  const isFailure = isFailureUsernameState(usernameState);
  const transitions = useTransition(isSuccessUsernameState(usernameState), null, {
    initial: { opacity: 1 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 5000 },
  } as any);
  const canShowButtonText = isInitial || isFailure;

  return (
    <FullPageCover>
      <Modal>
        {
          transitions.map(({ item: isSuccess, key, props }) =>
            isSuccess ?
              <TransitionWrapper key={key} style={props}>
                <Panel key={key} style={props}>I'm also here!!</Panel>
              </TransitionWrapper> :
              (
                <TransitionWrapper key={key} style={props}>
                  <Form onSubmit={handleSubmit}>
                    <Title>Please enter your name</Title>
                    <Input value={username} onChange={onChange} disabled={isLoading} placeholder="Username" />
                    {isFailureUsernameState(usernameState) &&
                      <ErrorMessage>{usernameState.error}</ErrorMessage>}
                    <Button fullWidth={!canShowButtonText} disabled={isLoading || isEmpty(username)}>
                      {canShowButtonText ?
                        'Start chatting' :
                        <Spinner size={20} />
                      }
                    </Button>
                  </Form>
                </TransitionWrapper>
              ),
          )
        }
      </Modal>
    </FullPageCover>
  );
};
