## Wiring up React + Redux
{title: 1}

## Requirements

## State from store to UI

## Actions from UI to store

## Loop

## Not many component should know about Redux!
{title: 1}

## Connected + presentation

## Presentation components, AKA...

- dumb components

## Presentation components take data, draw

- Presentation components take in *values* and render them
- They emit *values* when users interact

## Why values

- Canned values can be easily produced

## Values v objects

- Values = no identity
- Values = compare by value
- Values = immutable

## Stories

- If a dumb component only consumes values, can easily produce useful storybooks
- Work on your component in complete isolation from rest of app

## Connected components, AKA...

- smart components

## Connect to store

- links up the dumb components to your app
- these are very coupled to a specific context

## Connected components

- usually quite 'thin'
- interesting stuff happens in reducers etc
- think: glue

## With the functional style...

- we probably only need to write one function

## `mapStateToProps`

- Given states, returns a component's props

## Wiring

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./index";
import { appStore } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## Container component

```javascript
import React from 'react';
import {connect} from 'react-redux';

const UserProfile = ({username}) => (
  <span className='UserProfile'>{ username }</span>
)

// this returns props ready for a component
const mapStateToProps = ({ user: { username }}) => (
  { username }
);

// now using <UserProfileContainer /> we can render our thread, while
// keeping UserProfile ignorant of redux's existence
const UserProfileContainer = connect(mapStateToProps)(UserProfile);

// this wouldn't work alone - can you think why?
// const userProfile = <UserProfileContainer>
```

## Map state to actions

```javascript

const prepareActions = () => (
  {
    // pass in action creators, they will be wrapped in dispatch()
    onChangePassword: UserProfileActions.changePassword,
  }
)

const UserProfileContainer = connect(mapStateToProps)(UserProfile);
```

## Exercise: from scratch

- `create-react-app` and create a third app directory
- Define a component
- Include it into App
- Define a reducer
- Define a selector
- Define an action
- Using react-redux, wire the state into your component's props, and
  ensure the component dispatches an action on some UI integration
- Well done: you've cracked it!

