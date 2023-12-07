/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running


*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);  //adding the list with push()
  }

  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);  // using the splice()
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todos.slice(); // to return a copy so it prevents external modification
  }

  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    }
    return null;
  }

  clear() {
    this.todos = [];// clearing the list
  }
}

module.exports = Todo;
