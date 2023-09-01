import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this._http.get(this._baseUrl + `/${user.id}/${user.todos.length}`);
  }

  public findTodoByUser(user: User, id: string) {
    return this._http.get(this._baseUrl + `/${user.id}` + `?todos=${id}`);
  }

  public createTodo(user: User) {
    return this._http.put(this._baseUrl + `/${user.id}`, user);
  }

  public updateTodo(user: User) {
    return this._http.put(
      this._baseUrl + `/${user.id}` + `?todos=${window.crypto.randomUUID()}`,
      user
    );
  }

  public deleteTodoById(user: User) {
    return this._http.put(
      this._baseUrl + `/${user.id}` + `?todos=${window.crypto.randomUUID()}`,
      user
    );
  }

  public deleteAllTodos(user: User) {
    return this._http.put(
      this._baseUrl +
        `/${user.id}` +
        `?deleteAllTodos=${window.crypto.randomUUID()}`,
      user
    );
  }

  public hashed(variable: ArrayBufferView) {
    return window.crypto.getRandomValues(variable);
  }

  public convertToArrayBufferView(variable: number) {
    const arrayBuffer = new ArrayBuffer(variable);
    return new Uint8Array(arrayBuffer);
  }
}
