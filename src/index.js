import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Match, Miss } from 'react-router';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import Routes from './routes';



const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
