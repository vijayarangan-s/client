import React, { useState, useEffect, useRef } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import './DataTableDemo.css';


export const CompVersion = () => {
    const columns = [
        {field: 'version', header: 'version'},
    ];

    const [selectedColumns, setSelectedColumns] = useState(columns);
    const [customers, setCustomers] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);
    const [count, setCount] = useState(2)
    const toast = useRef(null);
    const [cols, setCols] = useState([])
    const [checked1, setChecked1] = useState(false);

    const onRowGroupExpand = (event) => {
        toast.current.show({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }

    const onRowGroupCollapse = (event) => {
        toast.current.show({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }

    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <span 
                    style={{fontWeight:"lighter",marginLeft:"5px"}}
                    className="image-text" >
                    {data.representative.name}
                </span>
            </React.Fragment>
        );
    }

    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                {/* <td colSpan="4" style={{ textAlign: 'right' }}>Total Customers</td> */}
                {/* <td>{calculateCustomerTotal(data.representative.name)}</td> */}
            </React.Fragment>
        );
    }

    const renderToggleSwitch = () => {
        return(
            <div 
                className="switchAlign"
                >
                <InputSwitch 
                    checked={checked1} 
                    onChange={(e) => setChecked1(e.value)} 
                />
                <span style={{
                    fontSize: "14px",
                    fontWeight: "lighter",
                    margin: "0px 6px"
                    }}>
                    Highlight Difference
                </span>
            </div>
        )
    }

    const renderAddCols = () => {
        return(
            <div>
               <Button 
                    icon="pi pi-plus" 
                    style={{background:"black"}}
                    onClick={renderNewColumn}
                    className="p-button-rounded p-button-secondary" />
            </div>
        )
    }

    const renderNewColumn = () => {
        setCount(count+1)
        setCols([...cols, <Column field="" header={`version ${count}`} />])
    }

    const headerColumns = (rowData) => {
        console.log({header: rowData})
        return(
            <React.Fragment>
                { rowData.cols &&
                    rowData.cols.map((val,i) => {
                        return(
                        <div key={i} className="rowAlign">
                        <span>{val}</span>
                        </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }

    const headerColumn1 = (rowData) => {
        console.log({header: rowData})
        let tb = '<table>',tbBody='<tbody>'
        return(
            <React.Fragment>
                { rowData.cols &&
                    rowData.cols.map((val,i) => {
                        console.log({i})
                        return(
                        <div key={i} className="rowAlign">
                        <span>{val}</span>
                        </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }


    const renderCollapseTable = () => {
        return(
            <div className="datatable-rowgroup-demo">
                <Toast ref={toast}></Toast>
                <div className="card">
                    <DataTable 
                        value={customers} 
                        rowGroupMode="subheader" 
                        groupField="representative.name"
                        sortMode="single" 
                        sortField="representative.name" 
                        sortOrder={1}
                        expandableRowGroups
                        expandedRows={expandedRows} 
                        onRowToggle={(e) => setExpandedRows(e.data)}
                        onRowExpand={onRowGroupExpand} 
                        onRowCollapse={onRowGroupCollapse}
                        rowGroupHeaderTemplate={headerTemplate} 
                        rowGroupFooterTemplate={footerTemplate}>
                    
                        <Column 
                            field="" 
                            className=""
                            style={{background:"#e9ecef", width:"19%"}}
                            header={renderToggleSwitch}
                            body={headerColumns}
                        />
                        
                        <Column 
                            field="name"  
                            className="colHead" 
                            style={{textAlign:"center"}}
                            header="Base Version" 
                            body={headerColumn1}
                        />

                        <Column 
                            field="company"  
                            className="colHead" 
                            style={{textAlign:"center"}}
                            header="Version 2"
                        />

                        {
                            cols && 
                            cols.map((v,i) => {
                                console.log({i})
                                return (
                                       <Column 
                                            key={i} 
                                            field="" 
                                            style={{textAlign:"center"}}
                                            header={`version ${i+3}`} 
                                        />
                                )
                            })
                        }
                        
                        <Column  header={renderAddCols()}></Column>
                    </DataTable>
                </div>
            </div>
        )
    }
    
    return (
        <div>
            {renderCollapseTable()}
        </div>
    )
}