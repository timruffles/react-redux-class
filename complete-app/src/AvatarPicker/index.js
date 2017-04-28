import React from 'react';
import { avatars } from '../common/avatars';

export function AvatarPicker({ picked, avatar }) {
  return <select value={avatar}
                 onChange={ event => picked(event.target.value) }
                 >
        { avatars.map(avatar =>
          <option key={avatar} value={avatar}>{ avatar }</option>)
        }
      </select>
}
