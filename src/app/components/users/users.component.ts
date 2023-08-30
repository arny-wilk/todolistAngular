import { Component, OnInit } from '@angular/core';
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

  selected!: User;

  show: boolean = false;

  newUser: User = {
    firstname: '',
    lastname: '',
    email: '',
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
    this._userService.update(this.selected).subscribe(() => this._init());
}

deleteUser() {
  this._userService.delete(this.selected).subscribe(() => this._init());
  }
}
