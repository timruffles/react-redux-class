import React from 'react';
import ReactDOM from 'react-dom';
import { FirstReduxPage } from "./index";
import store from './.store';
import {
    Provider 
} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <FirstReduxPage />
  </Provider>,
  document.getElementById('root')
);

