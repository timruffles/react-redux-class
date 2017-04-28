# Exercise App

Run me!

        npm run start

## Naming conventions

Use `camelCase`, with `PascalCase` for everything relating to components. This even goes for CSS! Why? It makes renaming and navigating easy.

Keep a flat structure:

        ${ComponentOne}
        ${Component}
    
Non-visual code will live in a `camelCase` directory - like the `chat` directory that containers reducers, middleware etc for handling the chat logic.
    
Tests live in `test.js` files, inline with their test subject. We'll use Jest to write tests.

### Components

Export the component as the default export of `${ComponentName}.js`.

        ${ComponentName}/
            # this is the component itself
            index.js
            # ...and its CSS
            index.css
            # this is the component's storybook, demonstrating the various states of the component
            story.js
            # tests for the component
            test.js

            # when we're developing an exercise, this will boot the app in just this section
            main.js

We use `index.js` as the component itself. Export the component as a named export - below as some examples of how:

        export const ComponentName = () => /* ... */;
        export function ComponentName() { /* ... */ }

        // class components
        export class ComponentName { /* ... */

We avoid default exports to ensure that renames perculate through the app. It also makes it more consistent: everything in the app is a named component, everything has a symbol that editors can identify and jump to.

To import a component you'd import, as create-react-app configures the build tools to follow node's resolution rules, which looks for `index.js` if a directory is imported`:

        import { ComponentName } from "../ComponentName";

### Features

This is where we implement the 'business logic' of the app, using redux:

        ${featureName}/
            index.js
            actions.js
            reducer.js
            test.js
            middleware.js


## FAQ

- Why are there hidden JS files? For instance `.store.js`.
        - Well done for noticing! These files are is simply to provide supporting code that's unimportant for learning the concept we're working on at a given point. There's no harm in reading them if you like. They're hidden to keep them out of your way.

