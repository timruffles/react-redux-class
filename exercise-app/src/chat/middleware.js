import {ChatActions, SEND_MESSAGE, CHAT_HISTORY_FETCH} from './actions';
import {chatEventsForRoom, sendChat, fetchChats} from './api';
import {here, failed} from '../common/remoteValue';
import {STARTUP} from '../lifecycle/actions';
import {applyMiddleware} from 'redux';
import {uniqueId} from '../common/random';
import {UserSelectors} from '../user/selectors';


export const chatStoreEnhancer = applyMiddleware(chatCommandMiddleware, chatSubscriptionMiddleware);


export function chatCommandMiddleware({ getState, dispatch }) {


  // might be neat to prevent subscription till user auth known?
  return (next) => {
    return handler(next, {
      [CHAT_HISTORY_FETCH]: (action) => {

        // TODO fetch chats, and ensure the correct actions are dispatched

      },

      [SEND_MESSAGE]: (action) => {
        const user = UserSelectors.userNow(getState());

        const chat = {
          id: uniqueId(),
          message: action.message,
          // obviously much better to allow server to do this, just for demo
          sentAt: Date.now(),
          avatar: user.avatar,
          userId: user.id,
        };

        next(ChatActions.message(chat));

        // TODO send chat, and ensure the correct actions are dispatched
      },

      [STARTUP]: (action) => {
        dispatch(ChatActions.fetchHistory());
      }
    })


  }

  function toMapById(result) {
    // create a map, keyed by id
    return result.reduce((m, item) => ( m.set(item.id, item), m ), new Map());
  }


}

export function chatSubscriptionMiddleware({ getState, dispatch }) {

  return (next) => (action) => {

    // on app startup, ensure we're connected to listen for events
    if(action.type === STARTUP) {
      // ensure other middleware also get the startup signal, and then resolve the setup in reserve order
      next(action);

      const chatEvents = chatEventsForRoom()

      chatEvents.addEventListener("chat", function(event) {
        const chat = JSON.parse(event.data);
        dispatch(ChatActions.message(chat));
      });

    } else {
      return next(action);
    }

  }

}




function handler(next, handlers) {
  return function (action) {
    // allow the action to appear in the log before handling
    next(action);

    const handler = handlers[action.type];

    if(handler) handler(action);
  }
}
