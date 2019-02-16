import React from 'react';
import './search.css';

const Search = () => {
  const searchText = 'Type here for search';
  const searchStyle = {
    fontSize: '20px'
  };
  return(

    <input type="text"
    className="form-control search-input"
    style = {searchStyle}
    placeholder = { searchText } />
  );
};
export default Search;
