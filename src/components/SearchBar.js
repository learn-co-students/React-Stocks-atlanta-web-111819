import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input 
          type="radio" 
          value="Alphabetically" 
          checked={props.sortType === 'Alphabetically'} 
          onChange={e => props.handleSearchCriteriaChanged('sort', e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input 
          type="radio" 
          value="Price" 
          checked={props.sortType === 'Price'} 
          onChange={e => props.handleSearchCriteriaChanged('sort', e.target.value)}
        />
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.handleSearchCriteriaChanged('filter', e.target.value)} value={props.filterType}>
          <option value='none'>None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
