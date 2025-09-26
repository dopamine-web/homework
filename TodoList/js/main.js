"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement


const button = document.querySelector(".button-create")
const todo = document.querySelector(".todos")
const input = document.querySelector(".input")


const createTodoElement = (text) => {
  const item = document.createElement("li"); 
  item.classList.add("todo");
  item.innerHTML = `
    <div class="todo-text">${text}</div>
      <div class="todo-actions">
        <button class="button-complete button">&#10004;</button>
        <button class="button-delete button">&#10006;</button>
    </div>
  `;
  return item;
};

button.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;
  const todoText = createTodoElement(text);
  todo.appendChild(todoText);
});


todo.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;
  const item = button.closest(".todo");
  if (button.classList.contains("button-delete")) {
    item.remove();
  } 
  if (button.classList.contains("button-complete")) {
    item.classList.add("done");
  }
});