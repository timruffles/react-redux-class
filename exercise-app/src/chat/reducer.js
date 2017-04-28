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
      // TODO what needs to occur here?
      return state;

    case CHAT_MESSAGE:
      // TODO what needs to occur here?
      return state;

    case SEND_MESSAGE:
      // TODO what needs to occur here?
      return state;

    case CHAT_HISTORY_FETCH:
      // TODO what needs to occur here?
      return state;

    case CHAT_HISTORY_FETCHED:
      // TODO what needs to occur here?
      return state;

    case CHAT_SEND_RESULT:
      // TODO what needs to occur here?
      return state;

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
