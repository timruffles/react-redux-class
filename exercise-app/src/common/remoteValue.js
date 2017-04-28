// This is a value object used to represent the state of
// remote values. It de-duplicates a lot of code around representing
// the state of requests to asynchronous systems


export const WAITING = 'waiting';
export const HERE = 'here';
export const FAILED = 'failed';
export const DORMANT = 'dormant';

export const states = {
  WAITING: WAITING,
  HERE: HERE,
  FAILED: FAILED,
  DORMANT: DORMANT,
};


// constructors
export function here(value) {
  return {
    state: HERE,
    value,
  }
}

export function dormant() {
  return {
    state: DORMANT,
  }
}

export function failed(error) {
  return {
    state: FAILED,
    error,
  }
}

export function waiting(progress) {
  return {
    state: WAITING,
    progress,
  }
}

// queries
export function isPresent(value) {
  return value.state === HERE;
}

export function isWaiting(value) {
  return value.state === WAITING;
}


export function mapHere(remoteValue, mapper) {
  return isPresent(remoteValue)
    ? here(mapper(remoteValue.value))
    : remoteValue;
}

export function mapStates(remoteValue, handlers) {
  const { fallback = missingHandler } = handlers;
  const forState = handlers[remoteValue.state] || fallback;
  return forState(remoteValue);
}

function missingHandler(rv) {
  console.error('no handler for remote value state', rv)
  throw Error('no handler')
}
