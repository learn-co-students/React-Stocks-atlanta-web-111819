import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortAlphabetically} onChange={props.onSortChanged}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={!props.sortAlphabetically} onChange={props.onSortChanged}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.onFilterChanged} value={props.stockFilter}>
          <option value="none">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
