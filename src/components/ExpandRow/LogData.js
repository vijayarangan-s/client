import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './DataTableDemo.css';

export const LogData = () => {
    const [products, setProducts] = useState([]);
    const [expandedRows, setExpandedRows] = useState(null);
    const [isOpenToggle, setIsOpenToggle] = useState(false)
    const isMounted = useRef(false);

    const handleToggle = () => {
        console.log({isOpenToggle})
        setIsOpenToggle(!isOpenToggle)
    }

    return (
        <div>
            <div style={{marginTop:"15px"}}>
                <button type="button" 
                    className="p-row-toggler p-link"
                    onClick={handleToggle}
                    >
                   {!isOpenToggle ?
                    <span className="p-row-toggler-icon pi pi-fw p-clickable pi-chevron-right"/> :
                    <span className="p-row-toggler-icon pi pi-fw p-clickable pi-chevron-down"/>
                    }
                </button>
                <span style={{marginLeft:"4px"}}>{!isOpenToggle? `Open log file` : `Close log file`}</span>
            </div>
            {!isOpenToggle ?
                "" : <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            }
        </div>
    )
}
