const http = require('http');
const redis = require('redis');
const ws = require('ws');

let nextMessageId = Math.floor(Math.random() * (1 << 31));

function sendMessage(ws, data) {
  const id = ++nextMessageId;
  const message = {
    id,
    timestamp: Date.now(),
    ...data,
  };

  ws.buffer.set(id, message);
  ws.send(JSON.stringify(message));
}

const server = http.createServer();
const wss = new ws.Server({ server });
wss.on('connection', ws => {
  ws.alive = true;
  ws.listen = false;
  ws.buffer = new Map();

  ws.on('pong', () => {
    ws.alive = true;
  });

  ws.on('message', message => {
    const data = JSON.parse(message.toString());
    if (data.command === 'latency') {
      sendMessage(ws, { type: 'latency' });
    } else if (data.command === 'ack') {
      ws.buffer.delete(data.id);
    } else if (data.command === 'listen') {
      ws.listen = true;
      ws.channel = data.channel;
    }
  });

  ws.on('close', () => {
    ws.alive = false;
  });
});

const RESEND_INTERVAL = 10000;
setInterval(() => {
  const now = Date.now();
  wss.clients.forEach(ws => {
    ws.buffer.forEach((key, message) => {
      if (now - message.timestamp > RESEND_INTERVAL) {
        ws.send(JSON.stringify(message));
      }
    });
  });
}, RESEND_INTERVAL);

const PING_INTERVAL = 10000;
setInterval(() => {
  wss.clients.forEach(ws => {
    if (!ws.alive) {
      ws.terminate();
    }

    // Connection will be closed during the next check, if the client does not respond.
    ws.alive = false;
    ws.ping();
  });
}, PING_INTERVAL);

const redisPort = process.env.REDIS_PORT || 6379;
const redisSub = redis.createClient(redisPort);
redisSub.on('pmessage', (pattern, channel, message) => {
  const data = JSON.parse(message);

  // Push message from the redis channel to the web sockets.
  wss.clients.forEach(ws => {
    if (!ws.listen || ws.channel !== channel) {
      return;
    }

    sendMessage(ws, data);
  });
});
redisSub.psubscribe('*');

const wsPort = process.env.PORT || 8001;
server.listen(wsPort, () => {
  console.log(`Server listening at ${wsPort}`);
});
