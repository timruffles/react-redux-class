import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import "./story.css"


// Exercise 1

// TODO - using a JSX image tag, and the src '/images/avatars/101-parrot.svg', make a Parrot appear!
// TODO - experiment with using other HTML attributes - which work?
// TODO can you add a class of 'Avatar' to the img tag?

storiesOf('Avatars', module)
  .add('parrot', () => (
    <div className="AvatarStory">
    </div>
  ))


// Exercise 2

// TODO define an 'Avatar' custom component in ./index.js in this folder
// TODO give it a parameter
// TODO using template interpolation, interpolate the avatar into the src
// TODO make a group of elephants, and some sea creatures (whale, octopus, dolphin) appear in the stories below

  .add('elephants', () => (
    <div className="AvatarStory">
    </div>
  ))
  .add('shoal of friends', () => (
    <div className="AvatarStory">
    </div>
  ))

