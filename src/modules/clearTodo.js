/* eslint-disable no-plusplus */
import data from './todoData.js';
import display from './Display.js';

const clearTodo = () => {
  let count = 1;
  data.todos = data.todos.filter((todo) => todo.completed !== true);

  data.todos = data.todos.map((todo) => ({
    description: todo.description,
    completed: todo.completed,
    index: count++,
  }));
  localStorage.setItem('todos', JSON.stringify(data.todos));
  display();
};

export default clearTodo;