# Server

Simple demo chat-server, designed for node >= 6.9.x. It's as simple as possible, using the most basic set of dependencies, even to the extend of not using Promises etc.

You won't need to take a look at this code for today's class, but do have a read!

## Design

- API - JSON REST
  - Commands (state changes) 
  - Bulk fetching 
- Real-time
  - EventSource - browser-native events over HTTP
