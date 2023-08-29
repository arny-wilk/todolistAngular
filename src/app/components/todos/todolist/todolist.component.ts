import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  @Input() todos!: Todo[]

  @Output() todoSelected = new EventEmitter<Todo>();

}
