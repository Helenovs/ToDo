import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import Search from './components/search';
import ItemStatusFilter from './components/item-status-filter';
import './index.css';
const App = () => {
  const todoData = [
    {label: "Drink Coffee", important: false, id: 1 },
    {label: "Make Awesome App", important: true, id: 2 },
    {label: "Have a lunch", important: false, id: 3 }
  ];
  return(
    <div className="todo-app">
      <AppHeader />
      <div className="top-panel d-flex">
        <Search />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData}/>
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'));
