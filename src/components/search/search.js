import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  constructor(){
    super();
    this.state= {
      term: ''
    }
  }
  onSearchChange =(e)=> {
    this.setState({term: (e.target.value)});
    this.props.onTermChange(e.target.value);
  }

  render(){
    const searchText = 'Type here for search';
    const searchStyle = {
      fontSize: '20px'
    };
    return(
      <input type="text"
      className="form-control search-input"
      onChange={this.onSearchChange}
      style = {searchStyle}
      value ={this.state.term}
      placeholder = { searchText } />
    );
  }

};
export default Search;
