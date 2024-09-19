import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!:Todo;
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todo> = new EventEmitter();


  constructor(){}

  onClickTask(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("on click has been triggered");
  }
  onCheckBoxClick(todo:Todo){
    console.log(todo);
    this.todoCheckbox.emit(todo);
    console.log(todo);
  }
}
