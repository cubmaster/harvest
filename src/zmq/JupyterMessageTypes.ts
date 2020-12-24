export interface IJupyterMessage {
    header: IJupyterMessageHeader;
    // tslint:disable-next-line:variable-name
    parent_header:object;
    metadata: object;
    content: object;
    buffers:object;

}
export class JupyterMessage implements IJupyterMessage{
    buffers: object = {};
    content: object;
    header:IJupyterMessageHeader =  new JupyterMessageHeader();
    metadata: object;
    // tslint:disable-next-line:variable-name
    parent_header: object;
}

// tslint:disable-next-line:max-classes-per-file
export  interface IJupyterMessageHeader{
    // tslint:disable-next-line:variable-name
    msg_id:string;
    session:string;
    username:string;
    date:string;
    // tslint:disable-next-line:variable-name
    msg_type:string;
    version:string;
}
// tslint:disable-next-line:max-classes-per-file
export class JupyterMessageHeader implements IJupyterMessageHeader{
    date: string = Date.now().toLocaleString();
    // tslint:disable-next-line:variable-name
    msg_id: string;
    // tslint:disable-next-line:variable-name
    msg_type: string;
    session: string;
    username: string;
    version: string;
}

// tslint:disable-next-line:max-classes-per-file
export class JupyterContentComm{

    // tslint:disable-next-line:variable-name
    comm_id: string =  "X";
    // tslint:disable-next-line:variable-name
    target_name:string =  'my_comm';
    data: object = {}
}


// tslint:disable-next-line:max-classes-per-file
export interface JupyterExecuteRequest{
    code:string;
    silent:boolean;
    // tslint:disable-next-line:variable-name
    store_history:boolean;
    // tslint:disable-next-line:variable-name
    user_expressions:any;
    // tslint:disable-next-line:variable-name
    allow_stdin:boolean;
    // tslint:disable-next-line:variable-name
    stop_on_error:boolean;
}

export enum JupyterMessageType
{
    execute_request = "execute_request",
    execute_reply ="execute_reply",
    kernel_info_request ="kernel_info_request",
    kernel_info_reply ="kernel_info_reply",
    shutdown_request ="shutdown_request",
    shutdown_reply ="shutdown_reply",
    interrupt_request ="interrupt_request",
    interrupt_reply ="interrupt_reply",

    stream ="stream",
    status ="status",
    display_data ="display_data",
    update_display_data ="update_display_data",
    execute_input ="execute_input",
    execute_result ="execute_result",
    error ="error",
    clear_output ="clear_output",

    input_request ="input_request",
    input_reply ="input_reply",
    inspect_request ="inspect_request",
    inspect_reply ="inspect_reply",
    is_complete_request ="is_complete_request",
    is_complete_reply ="is_complete_reply",
    complete_request ="complete_request",
    complete_reply ="complete_reply",

    comm_open ="comm_open",
    comm_msg ="comm_msg",
    comm_close ="comm_close"
}
