import './index.css';
import React from 'react';
import {AppButton} from '../AppButton/index';


export const MessageBox = ({ message, onMessage = noop(), onCompose = noop(), canSend = true, working = false }) => {
  let input;

  return <form className="MessageBox"
               onSubmit={(evt) => {
                 evt.preventDefault();
                 onMessage(message);
               }}
               onChange={(evt) => onCompose(input.value)}
               >
    <input value={message}
           ref={ref => input = ref}
           placeholder="Type your message in here!"
           disabled={working}
           className="Composition"
           autoFocus
           />
    <AppButton disabled={!canSend}
               working={working}
               style={{
                 color: '#2ddeb1',
               }}>
      Send
    </AppButton>
  </form>
};



function noop() {}
