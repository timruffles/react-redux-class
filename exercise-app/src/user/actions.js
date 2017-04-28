
export const USER_FETCHED = 'USER_FETCHED';

export class UserActions {
  // retrieve a current session
  static fetched(result) {
    return {
      type: USER_FETCHED,
      result,
    }
  }


}
