/**
 * Our state is simple: which lovely animal picture to display?
 *
 */

export { reducer as default };

// TODO look in the console to see what's happening - you should see actions being
// dispatched by the UI, but having no effect

function reducer(state = initialState(), action) {
  // TODO handle updating the state shape when an avatar is picked
  // TODO handle an unknown action by leaving the state unchanged
  // TODO make sure you're not mutating the data; you should be returning a new state value entirely
  return state;
}

function initialState() {
  return {
    avatar: "parrot",
  } 
}


export class AvatarActions {
  static picked(avatar) {
    return {
      type: 'avatarPicked',
      avatar,
    };
  }
}
