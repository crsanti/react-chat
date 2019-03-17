import { compose, not, prop } from 'ramda';
import allPass from 'ramda/es/allPass';
import equals from 'ramda/es/equals';
import isEmpty from 'ramda/es/isEmpty';
import React, { useCallback } from 'react';
import { useValue } from '../../hooks';
import { getText } from '../../utils';
import { Layout, TextArea } from './message-input.components';

const canSubmit = allPass([
  compose(equals('Enter'), prop('key')),
  compose(not, prop('shiftKey')),
  compose(not, isEmpty, getText),
]);

interface Props {
  disabled: boolean;
  addMessage(text: string): void;
}

export const MessageInput: React.FunctionComponent<Props> = ({ addMessage, disabled }) => {
  const { reset: emptyMessage, ...message } = useValue();
  const onKeyPress = useCallback((event: React.KeyboardEvent<HTMLElement>) => {
    if (canSubmit(event)) {
      event.preventDefault();
      addMessage(getText(event));
      emptyMessage();
    }
  }, [addMessage]);

  return (
    <Layout>
      <TextArea
        {...message}
        disabled={disabled}
        maxRows={5}
        onKeyPress={onKeyPress}
        placeholder="Type to write something"
      />
    </Layout>
  );
};
