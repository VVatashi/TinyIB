const http = require('http');
const redis = require('redis');
const ws = require('ws');

const server = http.createServer();
const wss = new ws.Server({ server });
wss.on('connection', ws => {
  ws.on('message', message => {
    const data = JSON.parse(message.toString());
    if (data.command === 'listen') {
      if (ws.redis) {
        // Close redis connection if it is already open.
        ws.redis.unsubscribe();
        ws.redis.quit();
      }

      const port = process.env.REDIS_PORT || 6379;
      ws.redis = redis.createClient(port);
      ws.redis.on('message', (channel, message) => {
        // Push messages from the redis channel to the web socket.
        ws.send(message);
      });
      ws.redis.subscribe(data.channel);
    } else if (data.command === 'latency') {
      ws.send(JSON.stringify({
        type: 'latency',
        timestamp: data.timestamp,
      }));
    }
  });

  ws.on('close', () => {
    if (ws.redis) {
      // Close redis connection.
      ws.redis.unsubscribe();
      ws.redis.quit();
    }
  });
});

const port = process.env.PORT || 8001;
server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
