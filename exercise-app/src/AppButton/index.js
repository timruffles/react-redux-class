import "./index.css";
import React from 'react';
import {Loader} from '../Loader/index';


export function AppButton(props) {
  const { working, ...buttonProps } = props;

  return <button className="AppButton"
          {...buttonProps}
          >
    { props.children }
    {
      working && <Loader />
    }
  </button>
}
