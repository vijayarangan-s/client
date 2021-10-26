import React from "react";
import ReactFilterBox, {AutoCompleteOption, SimpleResultProcessing, GridDataAutoCompleteHandler} from "react-filter-box";

class CustomAutoComplete extends GridDataAutoCompleteHandler {

    // override this method to add new your operator
    needOperators(parsedCategory) {
        var result = super.needOperators(parsedCategory);
        return result.concat(["startsWith"]);
    }
}
export default CustomAutoComplete