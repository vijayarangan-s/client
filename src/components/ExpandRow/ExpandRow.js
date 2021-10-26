import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import './DataTableDemo.css';
import { LogData } from './LogData';

export const ExpandRow = () => {
    const [products, setProducts] = useState([]);
    const [expandedRows, setExpandedRows] = useState(null);
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        setProducts([
            {"id": "1000",
             "status": "In development",
             "time": "24 June 2021",
             "name": "Vijay",
             "details": [{
                 "id": "1000",
                 "action": "action",
                 "status": "Cancelled",
                 "entity": "entity",
                 "cr_name": "CR",
                 "cr_time": "24 June 2021",
                 "reason": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                 "help_note":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                
                }]
            },
            {"id":"1001",
            "status":"Rejected",
            "time":"22 June 2021",
            "name":"Abhinav",
            "details":[
                {
                    "id": "1000",
                    "action": "action",
                    "status": "Cancelled",
                    "entity": "entity",
                    "cr_name": "CR",
                    "cr_time": "24 June 2021",
                    "reason": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "help_note":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                   
                   },
                
            ]},
            {"id":"1002",
            "status":"Auto Deployment",
            "time":"6 June 2021",
            "name":"Ajit",
            "details":[
                    {
                        "id": "1000",
                        "action": "action",
                        "status": "Cancelled",
                        "entity": "entity",
                        "cr_name": "CR",
                        "cr_time": "24 June 2021",
                        "reason": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        "help_note":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                       
                    },
                    
                    ]
        },
        ])
    }, []); 
   

    const rowExpansionTemplate = (data) => {
        let {action, status, entity, cr_name, cr_time, reason, help_note} = data?.details?.[0]
        return (
            <React.Fragment>
                <div className="expandRow">
                    <div>
                        <b>{action}</b>
                        <b style={{marginLeft:"5px"}}>{status}</b>
                    </div>
                    <div style={{marginTop:"3px"}}>
                        <span>{entity}</span>
                        <span style={{marginLeft:"5px"}}>{cr_name}</span>
                        <span style={{marginLeft:"5px"}}>{cr_time}</span>
                    </div>
                    <div style={{marginTop:"3px"}}>
                        <span>Reason: </span>
                        <span style={{marginLeft:"5px"}}>{reason}</span>
                    </div>
                    <div style={{marginTop:"3px"}}>
                        <span>Help Note: </span>
                        <span style={{marginLeft:"5px"}}>{help_note}</span>
                    </div>
                </div>
                <div className="expandRow" style={{marginTop:"3px"}}>
                    <LogData id={data?.id} />
                </div>
            </React.Fragment>
        );
    }

    return (
        <div>
            <p>ExpandRow</p>
            <div className="datatable-rowexpansion-demo">

            <div className="card">
                <DataTable value={products} 
                    expandedRows={expandedRows} 
                    onRowToggle={(e) => setExpandedRows(e.data)}
                    onRowExpand={() => {}} 
                    onRowCollapse={() => {}}
                    rowExpansionTemplate={rowExpansionTemplate} 
                    dataKey="id" >
                    <Column expander style={{ width: '3em' }} />
                    <Column field="status" header="Status"  />
                    <Column header="Updated Time" field="time" />
                    <Column field="name" header="Updated By" />
                </DataTable>
            </div>
        </div>
        </div>
    )
}
