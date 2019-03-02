import React from 'react';
import { Chat } from './components/chat';
import { GlobalStyles } from './globalStyles';

const App: React.StatelessComponent = () => {
  return (
    <>
      {GlobalStyles}
      <Chat />
    </>
  );
};

export { App };
