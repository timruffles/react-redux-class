import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ChatThread } from './index';
import {here, waiting} from '../common/remoteValue';

storiesOf('Chat threads', module)
  .add('empty thread', () => (
    <ChatThread chats={here([])}></ChatThread>
  ))
  .add('loading', () => (
    <ChatThread chats={waiting()}></ChatThread>
  ))
  .add('start of chat', () => (
    <ChatThread chats={here(startOfChat())}></ChatThread>
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

