import React, { Component } from 'react';
import './todo-list-item.css'

class TodoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    };
    this.onLabelClick = this.onLabelClick.bind(this);
    this.onMarkImportant  = this.onMarkImportant.bind(this);
    // this.props.onDeleted = this.props.onDeleted.bind(this);

  }
  onLabelClick() {
    this.setState ((state)=>{
      return {
        done: !state.done
      }
    });

  }
  onMarkImportant() {
    this.setState ((state) =>{
      return {
        important: !state.important
      }
    });
  }
  render() {
    const { label, done, important } = this.props;
    // const label =this.props.label;
    // const onDeleted =this.props.onDeleted;
    // const { done, important } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }


    return (
      <span className = {classNames}>
      <span
        className="todo-list-item-label"
        // onClick={ this.onLabelClick }
        onClick={ this.props.onToggleDone}>
        {label}
      </ span>
      <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                // onClick={ this.onMarkImportant }
                onClick={ this.props.onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={this.props.onDeleted} >
          <i className="fa fa-trash-o" />
        </button>

      </span>
    );
  }

}


export default TodoListItem;
