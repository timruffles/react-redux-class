import {USER_FETCHED} from './actions';
import {dormant} from '../common/remoteValue';

export function userReducer(state = userInitialState(), action) {
  switch(action.type) {
    case USER_FETCHED:
      return {
        ...state,
        user: action.result,
      }

    default:
      return state;
  }
}

function userInitialState() {
  return {
    user: {
      user: dormant(),
    },
  }
}
