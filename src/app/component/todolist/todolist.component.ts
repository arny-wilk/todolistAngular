import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  todo: Todo = { desc: 'se reveiller', done: false, updating: false };

  todos: Todo[] = [
    new Todo('Faire la vaiselle'),
    new Todo('Faire le menage'),
    new Todo('Faire les courses'),
  ];

  isDone(todo: Todo) {
    if (this.todos.includes(todo)) {
      todo.done = !todo.done;
    }
    console.log(`change is Done: `, todo.done);
  }

  onSubmit(todo: Todo) {
    this.todos.push(todo);
    console.log(`We addd the todo in the list : `, this.todos);
  }

  onDelete(todo: Todo) {
    let newTaskList: Todo[] = [];

    for (let i = 0; i < this.todos.indexOf(todo); i++) {
      newTaskList.push(this.todos[i]);
    }

    for (let i = this.todos.indexOf(todo) + 1; i < newTaskList.length; i++) {
      newTaskList.push(this.todos[i]);
    }

    this.todos = newTaskList;
    for (let task of newTaskList) {
      console.log(`${task.desc}`);
    }
  }
}
