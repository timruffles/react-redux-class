import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./index";
import { appStore } from './store';
import {
  Provider
} from 'react-redux';
import {LifecycleActions} from '../lifecycle/actions';

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);


appStore.dispatch(LifecycleActions.startup());