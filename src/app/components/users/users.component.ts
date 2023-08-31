import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  userId!: string;
  selected: User | null = null;

  showTodo: boolean = false;
  show: boolean = false;
  showUpdateUser: boolean = false;
  showUpdateTodo: boolean = false;

  newUser: User = {
    firstname: '',
    lastname: '',
    email: '',
    todos: [],
  };

  todoId!: string;
  selectedTodos!: Todo[];

  newTodo: Todo = {
    id: uuidv4(),
    category: '',
    desc: '',
    done: false,
    updating: false,
    details: '',
  };

  
  constructor(private _userService: UserService) {}
  
  ngOnInit(): void {
    this._init();
  }
  
  private _init() {
    this._userService
    .findAll()
    .subscribe((userReceived) => (this.users = userReceived));
  }
  
  createUser() {
    this._userService.create(this.newUser).subscribe(() => this._init());
  }

  updateUser() {
    if (this.selected) {
      this._userService.update(this.selected).subscribe(() => {
        this.selected = null;
        this._init();
      });
    }
  }

  deleteUser() {
    if (this.selected) {
      this._userService.delete(this.selected).subscribe(() => {
        this.selected = null;
        this._init();
      });
    }
  }

  createTodoUser() {
    if (this.selected && this.newTodo) {
      this.selectedTodos.push(this.newTodo);
      this._userService
        .createTodo(this.selected, this.selectedTodos)
        .subscribe(() => {
          this.newTodo = {
            id: uuidv4(),
            category: '',
            desc: '',
            done: false,
            updating: false,
            details: '',
          };
          this._init();
        });
    }
  }

  updateTodoUser() {
    if (this.selected && this.selectedTodos) {
      this._userService
        .updateTodo(this.selected, this.selectedTodos)
        .subscribe(() => {
          this.selectedTodos = [];
          this._init();
        });
    }
  }

  deleteByTodoUser() {
    if (this.selected && this.todoId) {
      this._userService
        .deleteTodoById(this.todoId)
        .subscribe(() => this._init());
    }
  }

  deleteTodosUser() {
    if (this.selected && this.selectedTodos) {
      this._userService
        .deleteAllTodos(this.selected, this.selectedTodos)
        .subscribe(() => {
          this.selectedTodos = [];
          this._init();
        });
    }
  }
}

function uuidv4(): string {
  return window.crypto.randomUUID();
}
