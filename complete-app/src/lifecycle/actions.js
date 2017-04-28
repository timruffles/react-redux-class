export const STARTUP = 'STARTUP';


export class LifecycleActions {
  // called when we're starting the app
  static startup() {
    return {
      type: STARTUP,
    }
  }
}
