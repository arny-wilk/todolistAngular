import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { Services } from 'src/app/shared/services/services';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  selected!: Todo;

  constructor(private _todosService: Services) {}

  ngOnInit(): void {
    this.todos = this._todosService.todos;
  }
  
}
