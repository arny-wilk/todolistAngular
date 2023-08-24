import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  todo: string = 'se reveiller';

  taskList: string[] = ['manger', 'coder', 'faire les courses', 'dormir'];

  onSubmit(todo: string) {
    this.taskList.push(todo);
    console.log(`We addd the todo in the list : `, this.taskList);
  }

  updateTask(newTodo: string, todo: string) {
    if (this.taskList.includes(todo)) {
      newTodo = todo;
    }
  }

  onDelete() {
     this.taskList.pop();
    console.log(`${this.taskList}`);
  }
}
