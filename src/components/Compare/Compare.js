import React, { useState, useEffect, useRef } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import './DataTableDemo.css';


export const Compare = () => {

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

    useEffect(() => {
         setCustomers(
            [   

                {
                    "id":1000,
                    "name":"James Butt",
                    "country":{
                        "name":"Algeria",
                        "code":"dz"
                        },
                    "company":"Benton, John B Jr",
                    "date":"2015-09-13",
                    "status":"unqualified",
                    "activity":17,
                    "representative":{
                        "name":"Update Info",
                        
                        }
                    },
                
                    {
                        "id":1001,
                        "name":"Josephine Darakjy",
                        "country":{
                        "name":"Egypt",
                        "code":"eg"
                        },
                        "company":"Chanay, Jeffrey A Esq",
                        "date":"2019-02-09",
                        "status":"proposal",
                        "activity":0,
                        "representative":{
                            "name":"Basic Info",
                        },
                        "cols":['Release Version', 'Application', 'Title','Structure', 'Delivery', 'Type', 'Some Multiple OPT']
                        },
            ])
    }, []); 
   
    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <span 
                    style={{
                        fontWeight:"lighter",
                        marginLeft:"5px"
                    }}
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

    const countryBodyTemplate = (rowData) => {
        // console.log({rowData})
        return (
            <React.Fragment>
                {/* <img alt={rowData.country.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width="30" /> */}
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
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

    const statusBodyTemplate = (rowData) => {
        return <span className={`customer-badge status-${rowData.status}`}>
                {rowData.status}
                </span>;
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                {/* <img alt={rowData.representative.name} src={`showcase/demo/images/avatar/${rowData.representative.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} /> */}
                <span className="image-text">{`${rowData.representative.name}...`}</span>
            </React.Fragment>
        )
    }

    const onRowGroupExpand = (event) => {
        toast.current.show({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }

    const onRowGroupCollapse = (event) => {
        toast.current.show({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data.representative.name, life: 3000 });
    }

    const renderToggleSwitch = () => {
        return(
            <div 
                className="switchAlign">
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
                            header={renderToggleSwitch()}
                            body={headerColumns}
                        />
                        
                        <Column field="name"  className="colHead" header="Base Version"></Column>
                        <Column field="company"  className="colHead" header="Version 2"></Column>
                        {
                            cols && 
                            cols.map((v,i) => {
                                console.log({i})
                                return (
                                       <Column key={i} field="" header={`version ${i+3}`} />
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
