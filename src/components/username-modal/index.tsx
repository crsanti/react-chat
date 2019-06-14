import React, { memo, useRef } from 'react';
import { useTransition, useChain } from 'react-spring';
import { SuccessUsernameState, UsernameState } from '../../model';
import { AnimatedModal, AnimatedTransitionWrapper, FullPageCover, Welcome } from './username-modal.components';
import { UsernameForm } from './username.form';

interface Props {
  usernameState: UsernameState;
  isOpen: boolean;
  onSubmit(username: string): void;
}

const visible = { opacity: 1, transform: 'translateY(0rem)' };
const hideDown = { opacity: 0, transform: 'translateY(3.2rem)' };
const hideUp = { opacity: 0, transform: 'translateY(-3.2rem)' };

let UsernameModal: React.FunctionComponent<Props> = (props) => {
  const { onSubmit, usernameState, isOpen } = props;
  const modalTransitionRef = useRef() as React.RefObject<null>;
  const modalTransition = useTransition(isOpen, null, {
    ref: modalTransitionRef,
    from: hideDown,
    enter: visible,
    leave: hideUp,
  });
  const contentTransitionRef = useRef() as React.RefObject<null>;
  const contentTransition = useTransition(isOpen, null, {
    ref: contentTransitionRef,
    initial: visible,
    from: hideUp,
    enter: visible,
    leave: hideDown,
    unique: true,
  } as any);

  useChain(
    isOpen
      ? [modalTransitionRef, contentTransitionRef]
      : [{ ...contentTransitionRef }, { ...modalTransitionRef }],
    [0, isOpen ? 0.1 : 0.8],
  );

  return (
    <>
      {modalTransition.map(({ item: isModalOpen, key: modalKey, props: modalStyle }) => (
        isModalOpen && (
          <FullPageCover key={modalKey} style={modalStyle}>
            <AnimatedModal>
              {
                contentTransition.map(({ item: showForm, key: contentKey, props: contentStyle }) => (
                  showForm
                    ? (
                      <AnimatedTransitionWrapper key={contentKey} style={contentStyle}>
                        <UsernameForm onSubmit={onSubmit} usernameState={usernameState} />
                      </AnimatedTransitionWrapper>
                    ) : (
                      <AnimatedTransitionWrapper key={contentKey} style={contentStyle}>
                        <Welcome>
                          Hi there, {(usernameState as SuccessUsernameState).username} 👋
                        </Welcome>
                      </AnimatedTransitionWrapper>
                    )
                ))
              }
            </AnimatedModal>
          </FullPageCover>
        )
      ))}
    </>
  );
};

UsernameModal = memo(UsernameModal);
export { UsernameModal };
