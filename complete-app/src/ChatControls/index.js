import "./index.css";
import React from 'react';
import {MessageBox} from '../MessageBox/index';


export const ChatControls = (props) => (
  <div className="ChatControls">
    <MessageBox {...props} />
  </div>
);
