import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

import './Workflow.css'

export const Workflow = () => {
    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState({});
    const [data, setData] = useState( [
        {
            "key": "0",
            "data":{
                "name":"In development",
                "icon":"pi pi-exclamation-circle",
                "size":"24 June 2021",
                "type":"Vijay"
            },
            "children":[
                {
                    "key": "0-0",
                    "data":{
                        "name":"editor.app",
                        "size":"25kb",
                        "type":"Application"
                    }
                },
                {
                    "key": "0-1",
                    "data":{
                        "name":"settings.app",
                        "size":"50kb",
                        "type":"Application"
                    }
                },
                {
                    "key": "0-2",
                    "data":{
                        "name":"React",
                        "size":"25kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "key": "0-0-0",
                            "data":{
                                "name":"react.app",
                                "size":"10kb",
                                "type":"Application"
                            }
                        },
                        {
                            "key": "0-0-1",
                            "data":{
                                "name":"native.app",
                                "size":"10kb",
                                "type":"Application"
                            }
                        },
                        {
                            "key": "0-0-2",
                            "data":{
                                "name":"mobile.app",
                                "size":"5kb",
                                "type":"Application"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "key": "1",
            "data":{
                "name":"Rejected",
                "icon":"pi pi-exclamation-circle",
                "size":"22 June 2021",
                "type":"Vijay"
            },
            "children":[
                {
                    "key": "1-0",
                    "data":{
                        "name":"editor.app",
                        "size":"25kb",
                        "type":"Application"
                    }
                },
                {
                    "key": "1-1",
                    "data":{
                        "name":"settings.app",
                        "size":"50kb",
                        "type":"Application"
                    }
                },
                {
                    "key": "1-2",
                    "data":{
                        "name":"React",
                        "size":"25kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "key": "1-2-0",
                            "data":{
                                "name":"react.app",
                                "size":"10kb",
                                "type":"Application"
                            }
                        },
                        {
                            "key": "1-2-1",
                            "data":{
                                "name":"native.app",
                                "size":"10kb",
                                "type":"Application"
                            }
                        },
                        {
                            "key": "1-2-2",
                            "data":{
                                "name":"mobile.app",
                                "size":"5kb",
                                "type":"Application"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "key": "2",
            "data": {
                "name":"Auto Deployment",
                "icon" :"pi pi-exclamation-triangle",
                "size":"6 June 2021",
                "type":"Vijay"
            },
            "children":[
                {
                    "key": "2-0",
                    "data":{
                        "name":"editor.app",
                        "size":"25kb",
                        "type":"Application"
                    }
                },
                {
                    "key": "2-1",
                    "data":{
                        "name":"settings.app",
                        "size":"50kb",
                        "type":"Application"
                    }
                },
                {
                    "key": "2-2",
                    "data":{
                        "name":"React",
                        "size":"25kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "key": "2-2-0",
                            "data":{
                                "name":"react.app",
                                "size":"10kb",
                                "type":"Application"
                            }
                        },
                        {
                            "key": "2-2-1",
                            "data":{
                                "name":"native.app",
                                "size":"10kb",
                                "type":"Application"
                            }
                        },
                        {
                            "key": "2-2-2",
                            "data":{
                                "name":"mobile.app",
                                "size":"5kb",
                                "type":"Application"
                            }
                        }
                    ]
                }
            ]
        }
    ])

    useEffect(() => {
         setNodes(data)
    }, []);

    
    const statusTemplate = (node, column) => {
        const {data, key} = node
        return <React.Fragment rowSpan={2}>
            <span className="statusAlign">{data.name}</span>
            <span className={data.icon} />
        </React.Fragment>;
    }

    return (
        <div>
            <h1>WorkFlow Log</h1> 
            <div>
            <div className="card">
                <h5>Basic</h5>
                <TreeTable value={nodes} >
                    <Column body={statusTemplate} header="Status" expander></Column>
                    <Column field="size" header="Updated Time"></Column>
                    <Column field="type" header="Updated By"></Column>
                </TreeTable>
            </div>

            
        </div>           
        </div>
    )
}
