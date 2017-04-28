export const CHAT_MESSAGE = 'CHAT_MESSAGE';
export const JOIN_ROOM = 'JOIN_ROOM';
export const SUBSCRIBED = 'SUBSCRIBED';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const COMPOSE_MESSAGE = 'COMPOSE_MESSAGE';
export const CHAT_SEND_RESULT = 'CHAT_SEND_RESULT';
export const CHAT_HISTORY_FETCH = 'CHAT_HISTORY_FETCH';
export const CHAT_HISTORY_FETCHED = 'CHAT_HISTORY_FETCHED';


export class ChatActions {
  // message received, or optimistically added as sent
  static message(chat) {
    return {
      type: CHAT_MESSAGE,
      chat,
    };
  }

  static sendResult(messageId, result) {
    return {
      type: CHAT_SEND_RESULT,
      id: messageId,
      result,
    };
  }
  
  static fetchHistory() {
    return {
      type: CHAT_HISTORY_FETCH,
    };
  }
  
  static historyFetched(result) {
    return {
      type: CHAT_HISTORY_FETCHED,
      result,
    };
  }

  static sendMessage(message) {
    return {
      type: SEND_MESSAGE,
      message,
    };
  }

  static composeMessage(message) {
    return {
      type: COMPOSE_MESSAGE,
      message,
    }
  }

  static subscribed() {
    return {
      type: SUBSCRIBED,
    }
  }
}

