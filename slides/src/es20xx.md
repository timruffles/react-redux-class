## ES20xx
{title: 1}

## Important highlights


## `const`

- In functional code, we use `const`
- We don't reassign in application code - only library/helper code when required

## `const`

    const item = {};
    // not allowed
    item = {};

## Array spread - ES2015

    const listA = [1,2,3];
    const listB = [...listA, 4, 5];
    const listC = [-2, -1, 0, ...listA];
    const listD = [...listA, ...listA];

    // [1, 2, 3], [1, 2, 3, 4, 5], [-2, -1, 0, 1, 2, 3], [1, 2, 3, 1, 2, 3]
    console.log(listA, listB, listC, listD);

## Argument spreading

    function joins(...args) {
      return args.join('-');
    }

    // 1-2-3-4
    console.log(joins(1,2,3,4)) 

    // 1-2-3-4-5-6-7
    console.log(joins(...[1,2,3,4], 5, ...[6], 7))

## Object spread

- ES2017 proposal, supported by babel

## Object spread


    const chatA = { message: "hi", avatar: "hippo" };
    const chatB = { ...chatA, avatar: "snake" };
    const chatC = { ...chatB, avatar: "monkey" };

## `const` doesn't relate to immutability

- You can still mutate mutable objects referred to by a `const`
- But: if you can, don't mutate anything in a Redux codebase!

## `const` + mutability


    const chatA = { message: "hi", avatar: "hippo" };

    // this works, but, as we'll see, will make your code hard to work with
    chatA.message = 'another';

## Functions

- Default arguments, implicit returns

## Function syntax

    const makeChat = (message, avatar = "hippo") => (
      { message, avatar }
    );

    function makeChange(message, avatar) {
      avatar = avatar == null ? 'hippo' : avatar;
      return { message: message, avatar: avatar }
    }

## Static functions

- Handy for grouping related functions in an IDE friendly way

## Static methods

    export class UserSelectors {
      static get(state, id) {
        // ...
      } 

      static all(state) {
        // ...
      } 
    }

    // elsewhere
    import { UserSelectors } from "./UserSelectors";

    const everyone = UserSelectors.all(state)

    
    
## Everyone happy?

- Can try it together at: babeljs.io/repl
    
## Import/export

- Today, stick to named imports
- With some default imports

## e.g

    import React from 'react';

    export function SomeComponent() {
    }

    import { OtherComponent } from "./OtherComponent";




