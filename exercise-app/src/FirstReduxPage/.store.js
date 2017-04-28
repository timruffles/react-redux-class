/*
 Well done for being curious and taking a look in here! This code is unimportant for learning
 the concept we're currently focussing on, but please feel free to have a read!

 */
import { createStore, applyMiddleware } from "redux";
import reducer from './reducer';
import logger from 'redux-logger';

export default createStore(reducer, applyMiddleware(logger));
