import {Todo} from "./Todo";

export class App {
  constructor() {
    this.todoList = [];
    this.todoList.push(new Todo("Clean my room"));
    this.todoList.push(new Todo("Exercise"));
    this.todoList.push(new Todo("Read Conan"));
    this.todoList.push(new Todo("Algorithms"));
    this.newItem="";

  }

  addTodo() {
    this.todoList.push(new Todo(this.newItem));
    this.newItem=""; 
  }

  removeTodo(todo){
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }
}
