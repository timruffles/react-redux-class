## Redux
{title:1}

## Redux is a scalable approach to state

## However complex it gets

## Three principles

## One place for state: the store

## Only actions cause state changes

## Reducers return *new* states

- They do not modify a state

## Redux cycle

![redux](./img/redux-diagram.png)

- credit: [Sigmus](https://github.com/reactjs/redux/issues/653#issuecomment-167994461)

## State

- Any JS values you like!
- Usually data-structures, e.g

```javascript
const state = {
    chats: {
      11: { // ...
    },
    users: {
      // ..
    }
}
```

## Actions

- Only common field is `type`

<code style="color: #888; white-space: pre">
const action = {
  <span style="color: red">type: "SEND_CHAT"</span>,
  message: "hi there",
  avatar: "penguin",
}
</code>

## Action creators

    export const SEND_CHAT = 'SEND_CHAT';

    const sendChatAction = (message, avatar) => (
      { message, avatar, type: SEND_CHAT }
    )

## In today's app

- Group with static methods of classes in `action.js` files

```javascript
export const SEND_CHAT = 'SEND_CHAT';
// ...

export class ChatActions {
  static send() {}
  static received() {}
  static fetched() {}
}
```
    

## Reducers

## One API to learn

<code style="color: #888; white-space: pre">
function reducer(state, action) {
  // ...
  return newState;
}
</code>

## State

<code style="color: #888; white-space: pre">
function reducer(<span style="color: red">state</span>, data) {
  // ...
  return newState;
}
</code>

## Action

<code style="color: #888; white-space: pre">
function reducer(state, <span style="color: red">action</span>) {
  // ...
  return newState;
}
</code>

## New state

<code style="color: #888; white-space: pre">
function reducer(state, action) {
  // ...
  return <span style="color: red">newState</span>;
}
</code>

## Complete

    const up   = () => ({ type: 'up' });
    const down = () => ({ type: 'down' });

    const actions = [up(), up(), down(), up()]
    const state = actions.reduce(reducer, { count: 0 });

    // { ... } ?
    console.log(state);

    function reducer(state, action) {
      if(action.type === 'up') {
        return { ...state, count: state.count + 1 };
      } else {
        return { ...state, count: state.count - 1 };
      }
    }


## Wouldn't this be easier?


    function reducer(state, action) {
      if(action.type === 'up') {
        state.count += 1;
      } else {
        state.count -= 1; 
      }
      return state;
    }

## The problem

## Lose benefits of immutable structures


## e.g easy change detection

    function hasStateChanged(stateA, stateB) {
      return stateA === stateB;
    }

## Mutable version

    function hasStateChanged(stateA, stateB) {
      // expensive, quite a tricky algorithm in JS!
      return deepEqual(stateA, stateB);
    }

## Can't rely on previous values

## Which is very useful

    function reducer(state, action) {
      switch(action.type) {
        // ...
        case SOME_TYPE:
          return {
            ...state,
            previous: [...state.previous, newItem],
          }
      }
    } 

## Stay immutable!

## How?

## Today: JS language features

- Safe Object/Array usage
- Avoid .splice/.pop/.push etc on arrays
- Avoid assignment or `Object.assign()`
- Use `...` instead!


## Exercise

    exercise-app/src/FirstReduxPage

    Building an Avatar picker

  

