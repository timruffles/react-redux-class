import React from 'react';
import './index.css';
import {ChatThread} from '../ChatThread/index';
import {ChatControls} from '../ChatControls/index';
import {connect} from 'react-redux';
import {ChatActions} from '../chat/actions';
import {isWaiting} from '../common/remoteValue';
import {ChatSelectors} from '../chat/selectors';


const ChatControlsContainer = connect(ChatSelectors.chatControlsProps, {
  onMessage: ChatActions.sendMessage,
  onCompose: ChatActions.composeMessage,
})(ChatControls);

const ChatThreadContainer = connect(ChatSelectors.chatThreadProps)(ChatThread);


export function App() {
  return <div className="App">
    <ChatThreadContainer />
    <ChatControlsContainer />
  </div>
}


