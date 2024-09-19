import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos!:Todo[];
  localItem :string | null=null; //localItem can be a string or null

  constructor() {
    this.localItem = localStorage.getItem("todos");  // Get the todos from localStorage
    if (this.localItem == null) {
      this.todos = [];  // If no todos in localStorage, initialize an empty array
    } else {
      this.todos = JSON.parse(this.localItem);  // Parse the JSON string from localStorage
    }
  }
  

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);

    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);

    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active= !this.todos[index].active;
    console.log(todo);

    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
}
