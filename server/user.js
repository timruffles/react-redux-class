// an in-memory stub for persisting users
'use strict';

const userId = 0;
const users = {};

exports.create = function(setup, cb) {
  userId += 1;

  const user = users[userId] = Object.assign({
    id: userId
  }, setup);

  cb(null, user);
}

exports.get = function(id) {
  const user = users[id];
  if(user) {
    cb(null, user);
  } else {
    cb(new Error("missing"));
  }
}

