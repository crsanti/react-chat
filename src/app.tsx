import React from 'react';
import { Chat } from './components/chat';
import { GlobalStyles } from './globalStyles';

const App: React.FunctionComponent = () => {
  return (
    <>
      {GlobalStyles}
      <Chat />
    </>
  );
};

export { App };
