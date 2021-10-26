import React, { useState, useEffect } from 'react'
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { addLocale } from 'primereact/api';
import 'primeflex/primeflex.css';


export const Calendar1 = () => {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;

    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);
    const [date3, setDate3] = useState(null);
    const [date4, setDate4] = useState(null);
    const [date5, setDate5] = useState(null);
    const [date6, setDate6] = useState(null);
    const [date7, setDate7] = useState(null);
    const [date8, setDate8] = useState(null);
    const [date9, setDate9] = useState(null);
    const [date10, setDate10] = useState(null);
    const [date11, setDate11] = useState(null);
    const [date12, setDate12] = useState(null);
    const [date13, setDate13] = useState(null);
    const [date14, setDate14] = useState(null);
    const [date15, setDate15] = useState(null);
    const [date16, setDate16] = useState(null);
    const [date17, setDate17] = useState(null);
    const [dates1, setDates1] = useState(null);
    const [dates2, setDates2] = useState(null);
    const [visible, setVisible] = useState(false);
    let invalidDates = [today,new Date('2021-07-20')]
    let validDates = ['2021-07-20','2021-07-10','2021-08-10']
    // console.log({invalidDates})
    let gDateDay = validDates.map(v => {
        let d= new Date(v)
        let day = d.getDate(v)
        let month = d.getMonth(v)
        return {day, month}
    })

    // console.log({gDateDay})
    const dateTemplate = (date) => {
        console.log({gDateDay})
        if (!gDateDay.some(e => e.day=== date.day && e.month === date.month)) {
            return (
                <button disabled>{date.day}</button>
                
            );
        }
        else {
            return date.day;
        }
    }

    return (
        <div>
           <div className="p-field p-col-12 p-md-4">
           <Calendar value={date1} id="datetemplate" 
           onChange={(e) => setDate1(e.value)} 
           dateTemplate={dateTemplate} />
 

<div className="p-field p-col-12 p-md-4">
                        <label htmlFor="disableddays">Disabled Days</label>
                        <Calendar id="disableddays" value={date5} 
                        onChange={(e) => setDate5(e.value)} 
                        disabledDates={invalidDates} 
                        // disabledDays={[0, 6]} 
                        readOnlyInput />
                    </div>
            </div> 
        </div>
    )
}
