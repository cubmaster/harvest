import * as uuid from 'uuid';
import {IJupyterMessage, JupyterMessage, JupyterMessageType} from "./JupyterMessageTypes";
import * as zeromq from 'jszmq';
export default class Session
{
     _protocolVersion: string  = "5.0";

    _rnd:any;

    Id:string;
    Key:string;
    Username:string;

    constructor(username:string = "username") {

        this.Id = uuid.v4();
        this.Username = username;

    }

    // session.py msg function
    BuildMessage( msgType:JupyterMessageType,  content:object):JupyterMessage {

        const msg =  new JupyterMessage();
        msg.header.msg_type  = msgType;
        msg.header.username = this.Username;
        msg.header.session = this.Id;
        msg.header.msg_id =uuid.v4();
        msg.header.version = this._protocolVersion;
        msg.content = content;
        return msg;

    }



}
