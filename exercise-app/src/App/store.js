import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import {userReducer} from '../user/reducer';
import {chatReducer} from '../chat/reducer';
import {chatStoreEnhancer} from '../chat/middleware';
import {userStoreEnhancer} from '../user/middleware';

const compositeEnhancer = compose(
  chatStoreEnhancer,
  userStoreEnhancer,
  // ensure logger gets it before middlewares that may terminate an action
  applyMiddleware(logger),
);

export const appStore = createStore(
  combineReducers({
    user: userReducer,
    chat: chatReducer,
  }),
  compositeEnhancer
);



