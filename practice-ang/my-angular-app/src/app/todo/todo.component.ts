import { Component } from '@angular/core';
import {Todo} from '../todo.model'
@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todos: Todo[] = []
  newTask=''

  addTodo() {
    if(this.newTask.trim()) {
      this.todos.push({task:this.newTask, completed:false})
      this.newTask = ''
    }
  }
  toggleDone(index:number) {
    this.todos[index].completed = ! this.todos[index].completed
  }

  deleteTodo(index:number) {
    this.todos.splice(index,1)
  }
}
