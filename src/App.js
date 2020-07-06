import React from 'react';
import './components/Todo.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  {
    info: 'call Melody',
    id: 123,
    completed: false
  },
  {
    info: 'buy groceries',
    id: 124,
    completed: false
  },
  {
    info: 'clean house',
    id: 1235,
    completed: false
  },
  {
    info: 'make appointment',
    id: 1246,
    completed: false
  },
  {
    info: 'finish project',
    id: 1237,
    completed: false
  },
  {
    info: 'watch new documentry',
    id: 1248,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      tasks // same as === tasks: tasks
    };
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      info: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };
  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };

  toggleCompleted(taskId) {
    debugger
    this.setState({
      ...this.state,
      todoData: this.state.todoData.map(item => {
        if (item.id === taskId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
