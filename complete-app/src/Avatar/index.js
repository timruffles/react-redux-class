import React from 'react';
import "./index.css";

export const Avatar = ({avatar}) => (
  <img src={avatarUrl(avatar)}
       alt={avatar}
       className="Avatar"
  />
)


function avatarUrl(avatar) {
  return `/images/avatars/101-${avatar}.svg`;
}

