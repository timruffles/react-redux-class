import {isWaiting, mapHere} from '../common/remoteValue';
import {UserSelectors} from '../user/selectors';


export class ChatSelectors {
  static latest(state) {
    return mapHere(state.chat.chats, (chats) => (
      Array.from(chats.values()).sort((a, b) => a.sentAt - b.sentAt).slice(-20)
    ))
  }


  static composition(state) {
    return state.chat.message;
  }

  static sendingResult(state) {
    return state.chat.sending;
  }

  static chatControlsProps(state) {
    const message = ChatSelectors.composition(state);
    return {
      message,
      working: isWaiting(state.chat.sending),
      canSend: message.length > 0 && UserSelectors.isLoggedIn(state),
    };
  }

  static chatThreadProps(state) {
    const userId = UserSelectors.userNow(state).id;
    return {
      chats: mapHere(ChatSelectors.latest(state), (chats) => (
        chats.map((chat) => (
          {
            ...chat,
            isMine: chat.userId === userId,
          }
        ))
      ))
    };
  }
}
