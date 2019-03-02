import { compose, not, prop } from 'ramda';
import allPass from 'ramda/es/allPass';
import equals from 'ramda/es/equals';
import isEmpty from 'ramda/es/isEmpty';
import React from 'react';
import { useValue } from '../customHooks';
import { getText } from '../utils';
import { Layout, TextArea } from './message-input.components';

const canSubmit = allPass([
  compose(equals('Enter'), prop('key')),
  compose(not, Boolean, prop('shiftKey')),
  compose(not, isEmpty, getText),
]);

interface Props {
  disabled: boolean;
  addMessage(text: string): void;
}

export const MessageInput: React.StatelessComponent<Props> = ({ addMessage, disabled }) => {
  const { resetValue: emptyMessage, ...message } = useValue('');
  const onKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (canSubmit(event)) {
      event.preventDefault();
      addMessage(getText(event));
      emptyMessage();
    }
  };

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
