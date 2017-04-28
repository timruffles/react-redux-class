// functions that access the server's API


const API_URL = 'http://localhost:9988'

// for this demo app, we don't worry about rooms
const ROOM_ID = 'demo';

export function chatEventsForRoom() {
  return new EventSource(API_URL + '/rooms/' + ROOM_ID  + "/events");
}


export function sendChat(message) {
  return apiFetch(`/rooms/${ROOM_ID}/chats`, {
    method: 'post',
    body: message,
  });
}

export function fetchChats() {
  return apiFetch(`/rooms/${ROOM_ID}/chats`, {
    method: 'get',
  })
  .then(res => res.json());
}

function apiFetch(url, optionsWithoutDefaults) {
  const options = Object.assign({
    mode: 'cors',
  }, optionsWithoutDefaults);

  if('body' in options) {
    options.body = JSON.stringify(options.body)
    options.headers = options.headers || new Headers([
      ['content-type', 'application/json'],
    ]);
  }

  return fetch(API_URL + url, options);
}