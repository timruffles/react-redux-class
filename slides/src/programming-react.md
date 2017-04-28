
## Programming React
{title:1}

## Big idea of React

## View as function of state

## 'Immediate mode'


## State = props

<!-- TODO image showing what's rendered is decided by props -->

## Props

    import React from 'react';

    const Avatar = ({avatar}) => (
      <img src={avatarToUrl(avatar)} />
    );

    const catAvatar = <Avatar avatar='cat' />;

    function avatarToUrl(avatar) {
      return '/img/avatars/' + avatar + '.svg';
    } 

## Passing as objet

    import React from 'react';

    const Avatar = ({avatar}) => (
      <img src={avatarToUrl(avatar)} />
    );

    const catProps = {avatar: 'cat'};
    const catAvatar = <Avatar {...avatar} />;

    // will have className prop too
    const specialCat = <Avatar {...avatar}
      className='special'
    />;

    function avatarToUrl(avatar) {
      return '/img/avatars/' + avatar + '.svg';
    } 

## Children etc are also props

## Tricks

    const Double = ({ children }) => (
      <div>
        { children }
        { children }
      </div>
    )

    const Quadruple = ({ children }) => (
      <Double>
        <Double>
          { children }
        </Double>
      </Double>
    )

    ReactDOM.render(
      <Quadruple children={<h2>☀️</h2>} />,
      document.getElementById('container')
    );
  

## Data in props
    
    const Items = ({ items }) => (
      <ul>
        { items.map(child) }
      </ul>
    )

    function child({ title }) {
      return <li >{ title }</li>
    }

    
    // will cause an error
    const three = [{title:"A"}, {title:"B"}, {title:"C"}];
    const listOfThree = <Items items={three} />
  
    // can fix with the 'key' attribute

## Exercise 3!

    Implement ChatThread

    


