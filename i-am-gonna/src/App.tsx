import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './modules/store';
import RootRouter from './router/MainRouter';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RootRouter />
    </Provider>
  );
}

export default App;
