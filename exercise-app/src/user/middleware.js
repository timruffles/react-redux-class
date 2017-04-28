import {uniqueId, pick} from '../common/random';
import {avatars} from '../common/avatars';
import {applyMiddleware} from 'redux';
import {STARTUP} from '../lifecycle/actions';
import {here} from '../common/remoteValue';
import {UserActions} from './actions';

export const userStoreEnhancer = applyMiddleware(userMiddleware);

export function userMiddleware({ getState, dispatch }) {
  return (next) => (action) => {

    next(action);
    
    switch(action.type) {
      case STARTUP:
        return dispatch(UserActions.fetched(here({
          id: uniqueId(),
          avatar: pick(avatars),
        })))

      default:
        return;
    }

  }
}
