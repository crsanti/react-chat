import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { Chat } from './components/chat';
import { GlobalStyles } from './globalStyles';
import { theme } from './theme';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      {GlobalStyles}
      <Chat />
    </ThemeProvider>
  );
};

export { App };
