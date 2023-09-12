import { Server } from 'socket.io';
import { io } from 'socket.io-client';

const URL = 'http://localhost:3000';

export const socket = io(URL, {
    autoConnect: true
});

const io = new Server({
  cors: {
    origin: "http://localhost:3001"
  }
});

io.listen(4000);