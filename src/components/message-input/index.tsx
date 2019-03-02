import { compose, not, prop } from 'ramda';
import allPass from 'ramda/es/allPass';
import equals from 'ramda/es/equals';
import isEmpty from 'ramda/es/isEmpty';
import React, { useState } from 'react';
import TextArea from 'react-autosize-textarea';
import { Layout } from './message-input.components';
import * as styles from './message-input.styles';

const getText = compose(
  prop('value'),
  prop('target'),
);

const canSubmit = allPass([
  compose(equals('Enter'), prop('key')),
  compose(not, Boolean, prop('shiftKey')),
  compose(not, isEmpty, getText),
]);

interface Props {
  addMessage(text: string): void;
}

export const MessageInput: React.StatelessComponent<Props> = ({ addMessage }) => {
  const [text, setText] = useState<string>('');

  const onChange = compose(setText, getText);

  const onKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (canSubmit(event)) {
      event.preventDefault();
      addMessage(getText(event) as string);
      setText('');
    }
  };

  return (
    <Layout>
      <TextArea
        css={styles.textarea}
        maxRows={5}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="Type to write something"
        value={text}
      />
    </Layout>
  );
};
