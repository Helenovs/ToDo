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
        {label: "Drink Coffee", important: true, done: true, id: 1 },
        {label: "Make Awesome App", important: true, done: false, id: 2 },
        {label: "Have a lunch", important: false, done: false, id: 3 }
      ]
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

  render() {
    const doneCount = this.state.todoData.filter((el)=>el.done).length;
    const todoCount = this.state.todoData.length-doneCount;
    return(
      <div className="todo-app">
        <AppHeader done={doneCount} todo={todoCount}/>
        <div className="top-panel d-flex">
          <Search />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData}
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
