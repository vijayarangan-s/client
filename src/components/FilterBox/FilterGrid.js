import React, { Component } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import FilterBox from "./FilterBox";
import peg from "pegjs"  
import './FilterBox.css'


class FilterGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };

  }


  componentDidMount(){
    //   const {onParser} = this.props
    //   console.log({ Filter:onParser})
  }

  handleChange = (e) => {
      const {value} = e.target;
      console.log({grid: value})
    //   var parser = peg.generate(value);
    //   console.log({parser})
      this.setState({query: value})
      this.props.onParser(value)
  }

  render() {
    const { query } = this.state;

    return (
      <div className="textarea-filter">
        <FilterBox>
          <InputTextarea
            value={query}
            onChange={(e) => this.handleChange(e)}
            rows={1}
            cols={50}
            style={{border:"none"}}
            autoResize
          />
        </FilterBox>
      </div>
    );
  }
}

export default FilterGrid;
