import React from 'react';
import './FilterBox.css'

const FilterBox = ({ children }) => {
  return (
    <div className="main-container">
      <div className="container">
        <span className="filter-icon">
          <i className="pi pi-filter" style={{ margin: "0 4px", fontSize: '1em' }} />
        </span>
        <span className="filter-container">
            {children}
        </span>
        <span className="close-icon">
          <i className="pi pi-times" style={{ margin: "0 2px", fontSize: '1.3em' }} />
        </span>
      </div>
    </div>
  );
};

export default FilterBox;
