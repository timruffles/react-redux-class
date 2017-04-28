
## Interaction
{ title: 1}

## V easy in React

## Interpolate event handlers

```javascript
import React from 'react';

const clicker = <button onClick={() => alert('hi')}>
  Say hi 
</button>

ReactDOM.render(clicker, document.body)
```

## Pass in handlers in props

```javascript
import React from 'react';

const Clicker = ({handleClick}) => (
  <button onClick={handleClick}>
    Say hi 
  </button>
)

ReactDOM.render(Clicker, document.body)
```

## Sets up normal DOM event-listeners

- e.g will hear bubbling events as normal

## Refs can be useful with events


const ImagePicker = ({onPicked}) => {
  let picked;

  return <div>
    <button onClick={() => onPicked(picked)}>
      Say hi 
    </button>
    <img src='some-image' 
         ref={el => ( picked = el )} />
  </div>
}



## Storybook has a way to see events

![img](./img/storybook-events.png)

## Code

```javascript
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

const WithListener = ({onActivate}) => (
  <button onClick={onActivate}>
    Click me
  </button>
)

storiesOf('clicking', module)
  .add('simple', () => (
    <WithListener onActivate={action('onPress')} />
  ))
```

## Exercise

  Build the MessageBox

