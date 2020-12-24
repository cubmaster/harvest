import JupyterClientBase from "./JupyterClientBase";
import {JupyterMessageType} from "./JupyterMessageTypes";

export default class CalcTest
{
    constructor(io) {
        const jcm = new JupyterClientBase(io);
        const content:object =  {
            code: '1+1',
            silent : false,
            store_history : true,
            user_expressions : null,
            allow_stdin : true,
            stop_on_error : true
        }
        jcm.sendShell(JupyterMessageType.execute_request, content,null);
        
    }

}
