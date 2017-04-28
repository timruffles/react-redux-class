import {dormant, waiting, mapHere} from '../common/remoteValue';
import {
  COMPOSE_MESSAGE,
  CHAT_MESSAGE,
  SEND_MESSAGE,
  CHAT_SEND_RESULT,
  CHAT_HISTORY_FETCH,
  CHAT_HISTORY_FETCHED
} from './actions';
import {setImmutable} from '../common/immutable';

export function chatReducer(state = chatInitialState(), action) {
  switch(action.type) {
    case COMPOSE_MESSAGE:
      return {
        ...state,
        message: action.message,
      }

    case CHAT_MESSAGE:

      return {
        ...state,
        chats: mapHere(state.chats, current => (
          setImmutable(current, action.chat.id, action.chat)
        )),
      }

    case SEND_MESSAGE:
      return {
        ...state,
        message: '',
        sending: waiting(),
      }

    case CHAT_HISTORY_FETCH:
      return {
        ...state,
        chats: waiting(),
      }

    case CHAT_HISTORY_FETCHED:
      return {
        ...state,
        chats: action.result,
      }

    case CHAT_SEND_RESULT:
      return {
        ...state,
        sending: action.result,
      }

    default:
      return state;
  }
}

export function chatInitialState() {
  return {
    message: '',
    sending: dormant(),
    chats: dormant(),
  };
}
