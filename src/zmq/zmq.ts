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
        "shell_port": 54768,
        "iopub_port": 54769,
        "stdin_port": 54770,
        "control_port": 54772,
        "hb_port": 54771,
        "ip": "127.0.0.1",
        "key": "6f0d7de5-eaaccb5d97169de9b81da9a0",
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

        await this.heartbeat.bind(this.connect_info.transport + '://' + this.connect_info.ip + ':' + this.connect_info.hb_port)
        console.log("Producer bound to port 3000")
        const msg = new JupyterContentComm();
        await this.heartbeat.send(new JupyterContentComm())
        const [result] = await this.heartbeat.receive()

        console.log(result)


    }


       //this.shell = new zmq.Dealer();
       //this.shell.connect(connect_info.transport + '://' + connect_info.ip + ':' + connect_info.shell_port);
        //
        //this.control = new zmq.Dealer( );
        //this.control.connect(connect_info.transport + '://' + connect_info.ip + ':' + connect_info.control_port);
        //this.stdin = new zmq.Dealer( );
        //this.stdin.connect(connect_info.transport + '://' + connect_info.ip + ':' + connect_info.stdin_port);
        //this.IOPub = new zmq.Sub();
        //this.IOPub.connect(connect_info.transport + '://' + connect_info.ip + ':' + connect_info.iopub_port);
        //this.IOPub.subscribe("IOPub");




    async SendShell(msg: JupyterMessage) {


        //this.shell.send(msg).then(()=>{
        //    console.log('Shell Sent');
        //}).catch(err=>{
        //    console.log("SendShell" + JSON.stringify(err));
        //});


    }
}


