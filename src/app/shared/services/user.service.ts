import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Services } from './todos.service';
import { User } from '../models/user';
import { environment } from 'src/environments/environment.development';
import { Todo } from '../models/todo';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _baseUrl = environment.urlApi.users;

  constructor(private _http: HttpClient) {
    this.findAll();
  }

  public findAll() {
    return this._http.get<User[]>(this._baseUrl);
  }

  public findById(id: string) {
    return this._http.get<User>(this._baseUrl + `/${id}`);
  }

  public create(created: User) {
    return this._http.post(this._baseUrl, created);
  }

  public update(updated: User) {
    return this._http.put(this._baseUrl + `/${updated.id}`, updated);
  }

  public delete(user: User) {
    return this._http.delete(this._baseUrl + `/${user.id}`);
  }

  public findTodosByUser(user: User) {
    return this._http.get(this._baseUrl + `/${user.id}/todos`);
}

  public findTodoByUser(user: User, todo: Todo[]) {
    return this._http.get(
      this._baseUrl +
        `/${user.id}` +
        `?todos=${user.todos === todo ? true : false}`
    );
  }

  public createTodo(user: User, createTodo: Todo[]) {
    return this._http.post(
      this._baseUrl +
        `${user.id}` +
        `?todo=${user.todos === createTodo ? true : false}`,
      createTodo
    );
  }

  public updateTodo(user: User, updatedTodo: Todo[]) {
    return this._http.put(
      this._baseUrl +
        `/${user.id}` +
        `?udpated=${user.todos === updatedTodo ? true : false}`,
      updatedTodo
    );
  }

  public deleteTodoById(id: string) {
    return this._http.delete(
      this._baseUrl +
        `/${id}`
    );
  }

  public deleteAllTodos(user: User, deleteAllTodos: Todo[] ) {
    return this._http.delete(
      this._baseUrl +
        `/${user.id}` +
        `?deleteAll=${deleteAllTodos}`
    );
  }
}
