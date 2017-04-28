import "./index.css";
import React from 'react';
import { Avatar } from '../Avatar';
import {Loader} from '../Loader/index';
import {mapStates} from '../common/remoteValue';


export const ChatThread = ({ chats }) => (
  <ul className="ChatThread">
    {
      mapStates(chats, {
        here: displayChats,
        fallback: loading,
        failed,
      })
    }
  </ul>
)

function loading () {
  return <li>
    <Loader />
  </li>
}

function failed () {
  return <li>
    We had a problem communicating with the server!
  </li>
}

function displayChats ({value: chats}) {
  return getThread(chats).map(chat => (
    <ChatThread.Item key={chat.id} chat={chat} />
  ))
}

ChatThread.Item = ({ chat }) => (
  <li className={`ChatThreadItem ${chat.isMine ? 'mine' : ''}`}
      >
    <Avatar avatar={chat.avatar} />
    <span className="ChatThreadMessage">
      { chat.message }
    </span>
  </li>
)

function getThread(chats) {
   return chats.length > 0 ? chats : emptyThread();
}

function emptyThread() {
  return [
    {
      id: "empty",
      message: "Say something to break the ice!",
      avatar: "penguin",
    }
  ]
}
