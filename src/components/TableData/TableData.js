import React, {useState, useEffect} from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import './TableData.css'
import $ from 'jquery'

const TableData = () => {

    useEffect(()=>{
        $(document).ready(function(){
        $('tr.header').click(function(){
            $(this).find('span').text(function(_, value){return value=='-'?'+':'-'});
            $(this).nextUntil('tr.header').slideToggle(100, function(){
            });
        });
    });
},[])

 const handleToggle =() => {
    $(document).ready(function(){
        $('tr.header').click(function(){
            $(this).find('span').text(function(_, value){return value=='-'?'+':'-'});
            $(this).nextUntil('tr.header').slideToggle(100, function(){
            });
        });
    });
 }

    const renderTable = () => {
        return(
            <div>
                <table border="0">
                <tr  class="header">
                    <th colspan="2">Header <span>-</span></th>
                </tr>
                <tr class="header">
                    <td colspan="2" onClick={handleToggle()}>Header <span>-</span></td>
                </tr>
                <tr>
                    <td>data</td>
                    <td>data</td>
                </tr>
                <tr>
                    <td>data</td>
                    <td>data</td>
                </tr>
                <tr  class="header">
                    <th colspan="2">Header <span>-</span></th>
                </tr>
                <tr>
                    <td>date</td>
                    <td>data</td>
                </tr>
                <tr>
                    <td>data</td>
                    <td>data</td>
                </tr>
                <tr>
                    <td>data</td>
                    <td>data</td>
                </tr>
                </table>
            </div>
        )
    }

    return(
        <>
          {renderTable()}
        </>
    )
}

export default TableData