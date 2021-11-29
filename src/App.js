import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  //Add Item handler-prop drill to TodoForm.js
  handleAddItem = (item) => {
    const newItem = {
      task: item,
      id: Date.now(),
      purchased: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newItem]
    });
  };

  //Clear Completed handler-prop drill to TodoForm.js
  handleClear = () => {
    this.state.todos.filter(item => {
      return item.purchased === false
    });
  }

  //toggle handler-prop drill to Todo.js
  handleToggle = (task) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(index => {
        if (index.task === task) {
          return {...index, completed: !index.completed}
        } else {
          return index;
        };
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} handleToggle={this.handleToggle} />
        <TodoForm handleAddItem={this.handleAddItem} handleClear={this.handleClear} />
      </div>
    );
  }
}

export default App;
