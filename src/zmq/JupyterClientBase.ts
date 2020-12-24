import zmq from './zmq';
import * as message from './JupyterMessageTypes';
import Session from './Session';
import {JupyterMessageType} from "./JupyterMessageTypes";
 
import ZMQ from "./zmq";

export default class JupyterClientBase {
    _session;
    _io;
    constructor(io:any) {
        this._session = new Session();
        this._io = io;
    }

    sendShell(msgtype:JupyterMessageType,content:object,cell:any){
        const msg = this._session.BuildMessage(msgtype,content);
        const _zmq = new ZMQ(this._io);

        _zmq.SendShell(msg).then();

    }




}
