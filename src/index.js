import './style.css';

// Lodash, now imported by this script

import addTodo from './modules/addTodo.js';
import { form, clear } from './modules/Elements.js';
import getTodos from './modules/GetTodo.js';
import clearTodo from './modules/clearTodo.js';

getTodos();

form.addEventListener('submit', (e) => addTodo(e));

clear.addEventListener('click', clearTodo);
