// a stubbed out server for a chat room - the implementation is KISS, and not something to follow for production :)
'use strict';

const PORT = process.env.PORT || 9988;
const cors = require('cors')

const express = require('express');
const bodyParser = require('body-parser');

const rooms = require("./room");
const users = require("./user");

if(require.main === module) {
  const server = createServer();
  server.listen(PORT, function() {
    console.log("listening on %d", PORT);
  });
}


function createServer() {
  const server = express();

  // allow all origins all the time to do anything
  server.use(cors());
  server.use(bodyParser.json());
  server.use(require("morgan")("short"));

  server.get("/rooms/:id/chats", fetchRoom, function(req, res) {
    setTimeout(function () {
      res.send(res.locals.room.latest());
    }, Math.random() * 1200 + 400)
  });

  server.post("/rooms/:id/chats", fetchRoom, function(req, res) {
    const room = res.locals.room;
    room.chat(req.body);

    setTimeout(function () {
      res.send(200);
    }, Math.random() * 600 + 300)
  });

  server.get("/rooms/:id/events", fetchRoom, function(req, res) {
    const room = res.locals.room;
    const sse = startSees(res);
    room.on("chat", sendChat);
        
    req.once("end", function() {
      rooms.removeListener("chat", sendChat);
    });
         
    function sendChat(chat) {
      console.log('heard and sending chat', chat);
      sse("chat", chat);
    }
  });

  return server;
}

function startSees(res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  res.write("\n");

  return function sendSse(name,data,id) {
    res.write("event: " + name + "\n");
    if(id) res.write("id: " + id + "\n");
    res.write("data: " + JSON.stringify(data) + "\n\n");
  }
}

function fetchRoom(req, res, next) {
  res.locals.room = rooms.get(req.params.id);
  next();
}





