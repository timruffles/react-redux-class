import {isPresent} from '../common/remoteValue';

const guest = {
  id: 'guest',
  isGuest: true,
}

export class UserSelectors {
  static userNow(state) {
    const remote = state.user.user;
    return isPresent(remote)
      ? remote.value
      : guest;
  }

  static isLoggedIn(state) {
    const remote = state.user.user;
    return isPresent(remote);
  }

  static avatarNow(state) {
    return UserSelectors.userNow(state).avatar;
  }
}
