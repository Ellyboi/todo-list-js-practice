import data from './todoData.js';
import display from './Display.js';

const getTodos = () => {
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('todos')) {
      data.todos = JSON.parse(localStorage.getItem('todos'));
      display();
    }
  });
};

export default getTodos;