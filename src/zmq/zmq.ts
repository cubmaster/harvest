import {Server, Socket} from "socket.io";
import * as zmq from 'zeromq';
import * as uuid from 'uuid';
import {JupyterContentComm, JupyterMessage} from "./JupyterMessageTypes";


export default class ZMQ
{
     heartbeat:any;
     shell:any;
     control:any;
     stdin:any;
     IOPub:any;
     io:any;
     ready:boolean = false;
    // tslint:disable-next-line:variable-name
     connect_info = {
         "shell_port": 55650,
         "iopub_port": 55651,
         "stdin_port": 55652,
         "control_port": 55654,
         "hb_port": 55653,
         "ip": "127.0.0.1",
         "key": "919ecdf6-070baf2d4df9e4ee6844e033",
         "transport": "tcp",
         "signature_scheme": "hmac-sha256",
         "kernel_name": ""
     };

    constructor(_io: Server) {
        this.io = _io;

    }
        // tslint:disable-next-line:variable-name
    async init() {
        this.heartbeat = new zmq.Request();
        this.shell = new zmq.Dealer();
        this.control = new zmq.Dealer();
        this.IOPub = new zmq.Subscriber();
        this.stdin = new zmq.Dealer();

        await this.heartbeat.connect(this.connect_info.transport + '://' + this.connect_info.ip + ':' + this.connect_info.hb_port);
        await this.shell.connect(this.connect_info.transport + '://' + this.connect_info.ip + ':' + this.connect_info.shell_port);
        await this.control.connect(this.connect_info.transport + '://' + this.connect_info.ip + ':' + this.connect_info.control_port);
        await this.IOPub.connect(this.connect_info.transport + '://' + this.connect_info.ip + ':' + this.connect_info.control_port);
        await this.stdin.connect(this.connect_info.transport + '://' + this.connect_info.ip + ':' + this.connect_info.control_port);
    }

    async SendHeartbeat(){
        const msg = new JupyterContentComm();
        await this.heartbeat.send(new JupyterContentComm())
        const [result] = await this.heartbeat.receive()

        console.log(result);
    }




    async SendShell(msg: JupyterMessage) {


        await this.shell.send(msg)
        const [result] = await this.shell.receive()

        console.log(result);


    }
}


