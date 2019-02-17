import React, { Component } from 'react';
import './item-add-form.css';

class ItemAddForm extends Component {
  constructor () {
    super();
    this.state= {
      label: ""
    }
  }
  onLabelChange =(e)=> {
    this.setState({label: (e.target.value)});
  };
  onSubmit = (e) => {
    

  };

  render() {
    return(
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
      <input type="text"
             className="form-control"
             onChange={this.onLabelChange}
             placeholder="What needs to be done"/>
      <button className="btn btn-outline-secondary"
      onClick={()=>this.props.onAdded("hello")}>
        Add Item
      </button>

      </form>
    );
  }

}
export default ItemAddForm;
