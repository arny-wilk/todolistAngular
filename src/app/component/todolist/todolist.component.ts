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
    // this.todos.splice(this.todos.indexOf(todo), 1);

    if (
      this.todos.indexOf(todo) !== 0 ||
      this.todos.indexOf(todo) !== this.todos.length
    ) {
      for (let i = this.todos.indexOf(todo) + 1; i < this.todos.length; i++) {
        this.todos[i - 1] = this.todos[i];
      }
      this.todos.pop();
    }

    if (this.todos.indexOf(todo) === 0) {
      this.todos.shift();
    }
    if (this.todos.indexOf(todo) === this.todos.length) {
      this.todos.pop();
    }
  }
}
