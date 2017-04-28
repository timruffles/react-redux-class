import './index.css';
import React from 'react';
import {AppButton} from '../AppButton/index';




export const MessageBox = ({ message, onMessage = noop(), onCompose = noop(), canSend = true, working = false }) => {
  /* TODO pass the current value of the input into the onCompose callback */

  /* TODO handle the form being submitted without the page reloading
   (in this case, there is only one child element that could fire change,
   but try to do it via the 'ref' feature to practise) */
  return <form className="MessageBox"
               onChange={onCompose}
               >
    <input value={message}
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
