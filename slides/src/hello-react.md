
## Hello React
{ title:1}


## JSX
{title:1}

## Embedding HTML in JS

    import React from 'react';

    const avatar = <img src='./avatars/hippo.png' />;

## ...as a first-class value

## e.g assign to variables

    import React from 'react';

    const avatar = <img src='./avatars/hippo.png' />;


## e.g pass into functions

    import React from 'react';

    console.log(
      <ul>
        <li>Parrot</li>
        <li>Elephant</li>
      </ul>
    );

## e.g return from functions

    import React from 'react';

    const List = () => (
      <ul>
        <li>Parrot</li>
        <li>Elephant</li>
      </ul>
    );

## Configure editors now...

![editors](img/editor.png)

## Exercise, then I'll show you around the app

## Exercise 1

    cd exercise-app
    npm install
    npm run storybook

    # edit exercise-app/src/Avatar/story.js
    

## The app
{ title: 1 }

## Uses `create-react-app`

- Quick start
- Zero-config
- Instant gratification!
  - Storybooks
  - Jest testing

## JSX in more depth
{title: 1}

## Compiled

<pre>
<code>
const List = &lt;p&gt;Parrot&lt;/p&gt;
</code>
</pre>
<pre>
<code>
var List = React.createElement(
  "p",
  null,
  "Parrot"
);
</code>
</pre>

## Let's play around in the console

```javascript
ReactDOM.render(
  React.createElement('div', {
    style: {
      color: 'red',
      fontSize: '44px',
    },
  }, 'hello'),
  document.body
)
```

## The famous 'virtual DOM'

- Just JS data-structures
- Very similar to the actual DOM (without all the methods etc)


## Reconciling the two

- What changes need to be made to the actual DOM...
- ...to bring it into line with VirtualDOM provided

## Get a feel for what's going on with VirtualDOM

![vdom](img/virtual-dom.png)

## Console again

## Creating components
{ title: 1 }


```javascript
import React from 'react';

const Parrot = () => (
  <img src="images/avatars/parrot.svg" />
);


const twoParrots = <div>
  <Parrot />
  <Parrot />
</div>
```

## One of the best things about JSX

## ...zero-cruft custom components

## Templating

- Interpolate JS expressions via `{ ... }`
- Can be attributes or child expressions


## Interpolating

    import React from 'react';

    const Avatar = (name) => (
      <img src={'./avatars/' + name + '.png'} />
    );

    const Loud = (name) => (
      <h2>{ name.toUppercase() }</h2>
    );


## All together


    import React from 'react';

    const Avatar = (name) => (
      <img src={'./avatars/' + name + '.png'} />
    );

    const avatarList = () => (
      <ul>
        <Avatar avatar='parrot' />
        <Avatar avatar='hippo' />
      </ul>
    );

    // we would see <body><ul><img /></img /></ul></body>
    ReactDOM.render(avatarList(), document.body)

## No framework cruft in DOM!

## Exercise 2

    Again, in Avatar storybook



