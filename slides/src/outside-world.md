
## Scary world outside Redux
{title:1}

## Redux

- Deterministic
- Synchronous
- Easy!

## Sadly...

## We do need to interact with the real world

## Side-effects

- Non-deterministic
- A-synchronous
- Tricky

## How do we bridge the gap?

## Many projects

- redux-thunk
- redux-sagas
- etc...

## Today I'll advocate

## KISS

## Middleware

## Actions in, actions out

## Listen for certain actions, and do...

## ...whatever

- talk to APIs
- IndexedDB
- LocalStorage
- Cookies
- etc

## Then dispatch actions

## We're talking to two types of API today

## Request-response

## Real-time

## Walk-through

  - Implementing fetching, and creating chats
