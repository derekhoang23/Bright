import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Match, Miss } from 'react-router';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Routes from './routes';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(ReduxThunk)
));

const root = document.getElementById('app');
const render = Component => {
  ReactDom.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    root
  )
}

render(Routes);

if(module.hot) {
  module.hot.accept('./routes', () => {
    render(Routes)
  });

}
