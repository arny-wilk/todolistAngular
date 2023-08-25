import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  todo: Todo = { desc: 'se reveiller', done: false };
  newtodo: Todo = { desc: 'change', done: false };

  todos: Todo[] = [
    new Todo('Faire la vaiselle'),
    new Todo('Faire le menage', true),
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

  updateTask(todo: Todo, newtodo: Todo) {
    let index = this.todos.indexOf(todo);

    if (index !== -1) {
      this.todos[index].desc = newtodo.desc;
    }

    console.log(`Replace the actual todo with newTodo : `, todo);
    console.log(`change in Array ? `, this.todos);
  }

  onDelete() {
    this.todos.pop();
    console.log(`${this.todos}`);
  }
}
