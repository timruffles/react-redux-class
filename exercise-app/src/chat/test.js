import {createStore, applyMiddleware} from 'redux';
import {chatReducer, chatInitialState} from './reducer';
import {ChatSelectors} from './selectors';
import {ChatActions} from './actions';
import {WAITING, here} from '../common/remoteValue';


describe("chat feature", () => {


  it("records chats received", () => {
    const final = [
      ChatActions.historyFetched(here([])),
      ChatActions.message({ id: 'a', message: 'a msg'}),
    ].reduce(chatReducer, chatInitialState())

    expect(assertHere(ChatSelectors.latest({ chat: final })).map(chat => chat.id)).toEqual(['a']);
  });

  it("only records new chats received", () => {
    const final = [
      ChatActions.historyFetched(here([])),
      ChatActions.message({ id: 'a', message: 'a msg'}),
      ChatActions.message({ id: 'a', message: 'a msg 2'}),
      ChatActions.message({ id: 'b', message: 'b msg'}),
    ].reduce(chatReducer, chatInitialState())

    expect(assertHere(ChatSelectors.latest({ chat: final }))).toHaveLength(2)
  });

  it("resets composition message on send", () => {
    const final = [
      ChatActions.composeMessage('start'),
      ChatActions.sendMessage('start'),
    ].reduce(chatReducer, chatInitialState())

    expect(ChatSelectors.composition({ chat: final })).toBe('');

  });

  it("sets the sending result to waiting on send", () => {
    const final = [
      ChatActions.sendMessage('start'),
    ].reduce(chatReducer, chatInitialState())

    expect(ChatSelectors.sendingResult({ chat: final }).state).toBe(WAITING);

  });

});


function assertHere(remoteValue) {
  expect(remoteValue.state).toBe('here');
  return remoteValue.value;
}


