// an in-memory stub for persisting rooms and chats
'use strict';

const EventEmitter = require("events").EventEmitter;

const rooms = new Map;

class Room extends EventEmitter {
  constructor(_id) {
    super();
    this.chats = new Map;
  }

  chat(chat) {
    if(!this.chats.has(chat.id)) {
      this.chats.set(chat.id, chat);
      this.emit("chat", chat);
    }
  }

  latest() {
    // get the latest 20 - maps store values in insertion order
    return Array.from(this.chats.values()).slice(-20).reverse();
  }
}




exports.get = function(id) {
  if(!rooms.has(id)) {
    rooms.set(id, new Room(id));
  }
  return rooms.get(id);
}


