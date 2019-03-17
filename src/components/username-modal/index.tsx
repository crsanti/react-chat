import React from 'react';
import { useTransition } from 'react-spring';
import { isSuccessUsernameState, SuccessUsernameState, UsernameState } from '../../model';
import { FullPageCover, Modal, TransitionWrapper, Welcome } from './username-modal.components';
import { UsernameForm } from './username.form';

interface Props {
  usernameState: UsernameState;
  show: boolean;
  onSubmit(username: string): void;
}

export const UsernameModal: React.FunctionComponent<Props> = ({ onSubmit, usernameState, show }) => {
  const modalTransition = useTransition(show, null, {
    enter: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(3.2rem)' },
    leave: { opacity: 0, transform: 'translateY(3.2rem)' },
    trail: 750,
  });
  const transitions = useTransition(isSuccessUsernameState(usernameState), null, {
    initial: { opacity: 1, transform: 'translateY(0rem)' },
    from: { opacity: 0, transform: 'translateY(3.2rem)' },
    enter: { opacity: 1, transform: 'translateY(0rem)' },
    leave: { opacity: 0, transform: 'translateY(-3.2rem)' },
  } as any);

  return (
    <>
      {modalTransition.map(({ item: isMounted, key: mountedKey, props: mountedProps }) => (
        isMounted && (
          <FullPageCover key={mountedKey} style={mountedProps}>
            <Modal>
              {
                transitions.map(({ item: isSuccess, key, props }) =>
                  isSuccess ?
                    <TransitionWrapper key={key} style={props}>
                      <Welcome key={key} style={props}>Hi there, {(usernameState as SuccessUsernameState).username} 👋</Welcome>
                    </TransitionWrapper> :
                    (
                      <TransitionWrapper key={key} style={props}>
                        <UsernameForm onSubmit={onSubmit} usernameState={usernameState} />
                      </TransitionWrapper>
                    ),
                )
              }
            </Modal>
          </FullPageCover>
        )
      ))}
    </>
  );
};
