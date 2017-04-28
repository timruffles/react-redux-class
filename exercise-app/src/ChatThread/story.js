import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ChatThread } from './index';

storiesOf('Chat threads', module)
  .add('empty thread', () => (
    <ChatThread chats={[]} />
  ))
  .add('start of chat', () => (
    <ChatThread chats={startOfChat()} />
  ))

function startOfChat() {
  return [
    {
      id: 1,
      message: "Hi there!",
      avatar: "lion",
      isMine: true,
    },
    {
      id: 2,
      message: "Yo!",
      avatar: "sheep",
      isMine: false,
    },
  ]
}



// ChatThread exercise part two - this will be in a separate exercise to part one
// TODO Using the functions expose by ../common/remoteValue, create stories for:
// - loaded
// - loading
// - failed

// you will need to update the ChatThread/index file too
// you may find the `handleState` function of remoteValue useful


// you may wish to use the Loader component
