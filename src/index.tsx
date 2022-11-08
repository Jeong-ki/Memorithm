import { hydrate } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { Provider } from 'react-redux';

import GlobalStyle from '@styles/GlobalStyle';
import App from './App';
import store from './store';

loadableReady(() => {
  const rootElement = document.getElementById('root');
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <>
          <GlobalStyle />
          <App />
        </>
      </BrowserRouter>
    </Provider>,
    rootElement,
  );
});

if (module.hot) {
  module.hot.accept();
}
