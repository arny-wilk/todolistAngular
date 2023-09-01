import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { Services } from 'src/app/shared/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {

  todos: Todo[] = [];

  selected!: Todo;
  
}
