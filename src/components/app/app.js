import React, { Component } from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import Search from '../search';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

class App extends Component {

  constructor() {

    super();

    this.state = {
      todoData: [
        {label: "Drink Coffee", important: false, done: false, id: 1 },
        {label: "Make Awesome App", important: false, done: false, id: 2 },
        {label: "Have a lunch", important: false, done: false, id: 3 }
      ],
      term: '',
      filter: 'all'
    }
  };
   maxId = 100;
 deleteItem = (id) => {
    this.setState(({todoData})=>{
      const idx = todoData.findIndex((el)=>el.id===id)
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];

      return {
        todoData: newArray
      };
    });
  };
  onToggleImportant = (id) => {
    this.setState(({todoData})=>{
      const idx = todoData.findIndex((el)=>el.id===id)
      const newArray = [...todoData];
      newArray[idx].important=!newArray[idx].important;
      return {
        todoData: newArray
      };
    });
  };
  onToggleDone = (id) => {
    this.setState(({todoData})=>{
      const idx = todoData.findIndex((el)=>el.id===id)
      const newArray = [...todoData];
      newArray[idx].done=!newArray[idx].done;
      return {
        todoData: newArray
      };
    });
  };
  adItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      done: false,
      id: this.maxId++
    };
console.log(this.maxId);
  console.log("aded", text)
    this.setState(({todoData})=>{
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      }

    });
  };
  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item)=>item.label.toLowerCase().indexOf(term.toLowerCase())>-1);
  };

  filter(items, filter) {
      switch (filter){
        case 'all': return items;
        case 'active': return items.filter((item)=>!item.done);
        case 'done': return items.filter((item)=>item.done);
        default: return items;
      }
  };

  onSearchChange=(text)=>{
    this.setState({term: text});
  }

  onFilterChange=(filter)=>{
    this.setState({filter: filter});
  }

  render() {
    const doneCount = this.state.todoData.filter((el)=>el.done).length;
    const todoCount = this.state.todoData.length-doneCount;
    console.log(this.state.todoData);
    console.log(this.state.term);
    const visibleItems = this.filter(this.search(this.state.todoData, this.state.term),this.state.filter);
    console.log ("Visible", visibleItems);
    return(
      <div className="todo-app">
        <AppHeader done={doneCount} todo={todoCount}/>
        <div className="top-panel d-flex">
          <Search onTermChange={this.onSearchChange}
           />
          <ItemStatusFilter
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList todos={visibleItems}
        onDeleted={this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone}/>
        <ItemAddForm
        onAdded={this.adItem}/>
      </div>
    );
  }
}

export default App;
