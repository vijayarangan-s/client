import React from 'react';
import _ from 'lodash'
import {SimpleResultProcessing} from "react-filter-box";

class CustomResultProcessing extends SimpleResultProcessing {

    // override this method to add your handler for startsWith operator
    filter(row, fieldOrLabel, operator, value){
        var field = this.tryToGetFieldCategory(fieldOrLabel);
        switch(operator){
            case "=": return row[field] === value;
            case "<>": return row[field] !== value;
            case ">": return row[field] > value;
            case "<": return row[field] < value;
            case ">=": return row[field] >= value;
            case "<=": return row[field] <= value;
            case "LIKE": return row[field].includes(value);
            case "NOT LIKE": return !row[field].includes(value);
            case "NULL": return row[field] === null;
            case "NOT NULL": return row[field] !== null;
            default: return row[field]
        }
        
    }
}

export default CustomResultProcessing
