import express from "express";
import * as http from "http";
import socketio from "socket.io";
import  ZMQ from './zmq/zmq'
import CalcTest from "./zmq/CalcTest";

const app = express();
const server = new http.Server(app);
const io = new socketio.Server(server);
const zmq = new ZMQ(io);
zmq.init().then(()=>{
    console.log("execute");
});

//const ct = new CalcTest(io);

server.listen(process.env.PORT || 3000, () => {
    console.log(`Application listening on port ${process.env.PORT || 3000}!`);
});
io.on("connection", (socket) => {
    console.log("A user has connected to the socket!");
    socket.on('disconnect', () => console.log('A user has disconnected from the socket!'));
});
