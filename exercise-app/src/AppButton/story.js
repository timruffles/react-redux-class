
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {AppButton} from './index';


storiesOf('App button', module)
  .add('active', () => (
    <AppButton>Click me</AppButton>
  ))
  .add('disabled', () => (
    <AppButton disabled={true}>Click me</AppButton>
  ))
  .add('working', () => (
    <AppButton working={true}>You clicked</AppButton>
  ))


