## Modeling state
{ title: 1}

## Operations that occur over time

## e.g AJAX fetch

## Some people solve as follows

```javascript
const startState = {
  chats: undefined, 
  chatsLoaded: false,
  chatLoadError: undefined,
}

const successState = {
  chats: [ { id: 'abbc', text: 'hi', //....
  chatsLoaded: true,
  chatLoadError: undefined,
}

const failureState = {
  chats: undefined,
  chatsLoaded: true,
  chatLoadError: Error("hi'),
}
```

## I prefer an Elm inspired approach

## RemoteValue

## Let's take a look at the source code


## Exercise

  Update chat story to support loading, and error views

  Exercise - ChatThread part 2 


## Multiple references to data
{title:1}

## Using same data in multiple places

## Two approaches

## Normalized

## AKA relational

## Have 'tables' for each type, with keys

## Where you cross reference, use IDs

## Second option: de-normalize

## Inline the data

## For Redux: normalize

## Updating immutably is already fiddly

## Manually keeping all versions up to date
{ bad: 1 }

## e.g

    const state = {
      selectedChat: {
        id: 10,
        message: 'hi there', 
      },
      chats: {
        10: { message: 'hi there', },
        26: { // ...
        27: { // ...
      },
    };

## We now have versions of the same data!

## SPOT

- Single
- Point
- Of
- Truth

## Use selectors to hide structure of data

## Pass state freely, but only access via Selectors

## e.g waaaaay coupled


    const ChatView = ({ state }) => {
      <ul>
        {
          (state.chat.chats && state.chats.chats.state === 'here'
            ? state.chat.chats.value
            : [])
          .map(chat => (
            {
              ...chat,
              isMine: state.user && state.user.id === chat.id,
            }
          ))
          .map(chatItem)
        }
      </ul>
    };

## e.g keep decoupled


    const ChatView = ({ state }) => {
      <ul>
        {
          ChatSelectors.loadedChats(state)
          .map(chatItem)
        }
      </ul>
    };

## Use selectors to turn 'ids' into data

    export class ChatSelectors {
      static selectedChat(state) {
        return state.chat.selectedId
          ? getRow(state.chat.chats, state.chat.selectedId)
          : undefined;
      }
    }

## Reducer exercise
{title:1}

  Implement the chat reducer

  We'll use:
  - our knowledge of immutable structures
  - of normalization
  - and of the concept of the RemoteValue abstraction

