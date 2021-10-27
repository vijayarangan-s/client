import { GridDataAutoCompleteHandler} from "react-filter-box";

class CustomAutoComplete extends GridDataAutoCompleteHandler {

    // override this method to add new your operator
    needOperators(parsedCategory) {
        var result = super.needOperators(parsedCategory);
        const newOper = ['>','<','=','<>','>=','<=','LIKE', 'NOT LIKE', 'NULL', 'NOT NULL']
        return newOper;//result.concat(["startsWith"]);
    }
}
export default CustomAutoComplete