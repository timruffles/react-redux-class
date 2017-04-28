import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { MessageBox } from './index';

const actionListeners = {
  onMessage: action('onMessage'),
  onCompose: action('onCompose'),
};

storiesOf('Message Box', module)
  .add('empty', () => (
    <MessageBox message=""
                {...actionListeners} />
  ))
  .add('message added', () => (
    <MessageBox message="Hey there"
                {...actionListeners} />
  ))
  .add('not sendable', () => (
    <MessageBox message="Hey there"
                canSend={false}
                {...actionListeners} />
  ))
  .add('sending', () => (
    <MessageBox message="Hey there"
                working={true}
                canSend={false}
                {...actionListeners} />
  ))


