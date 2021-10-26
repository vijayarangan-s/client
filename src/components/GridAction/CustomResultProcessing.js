import React from 'react';
import _ from 'lodash'
import {SimpleResultProcessing} from "react-filter-box";

class CustomResultProcessing extends SimpleResultProcessing {

    // override this method to add your handler for startsWith operator
    filter(row, fieldOrLabel, operator, value){
        
        var field = this.tryToGetFieldCategory(fieldOrLabel);
        console.log({row, fieldOrLabel, operator, value, field})
        switch(operator){
            case "==": return row[field] == value;
            case "!=": return row[field] != value;
            case "contains": return row[field].toLowerCase().indexOf(value.toLowerCase()) >=0;
            case "!contains": return row[field].toLowerCase().indexOf(value.toLowerCase()) <0;
            case "startsWith": return  _.startsWith(row[field].toLowerCase(), value.toLowerCase() ) ;
            case ">": return row[field] > value;
            case "<": return row[field] < value;
        }
        
        return false;
    }
}

export default CustomResultProcessing
