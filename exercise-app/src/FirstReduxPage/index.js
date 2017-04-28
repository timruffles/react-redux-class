/*
 Well done for being curious and taking a look in here! This code is unimportant for learning
 the concept we're currently focussing on, but please feel free to have a read!
 */
import React from 'react';
import {
    connect
} from 'react-redux';
import { Avatar  } from '../Avatar';
import { avatars } from '../common/avatars';
import {AvatarActions} from './reducer';


const FirstReduxPageComponent = ((props) => {
  const { avatar } = props;
  return <div>
      <p>
        <Avatar avatar={avatar}></Avatar>
      </p>

      <select value={avatar}
              onChange={ event => props.avatarPicked(event.target.value) }
              >
        { avatars.map(avatar =>
          <option key={avatar} value={avatar}>{ avatar }</option>)
        }
      </select>
  </div>
});

export const FirstReduxPage = connect(mapStateToProps, { avatarPicked: AvatarActions.picked })(FirstReduxPageComponent)

function mapStateToProps({ avatar }) {
  return {
    avatar,
  }
} 



