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
    const hashed = this.hashed(user.todos);
    return this._http.get(this._baseUrl + `/${user.id}/${hashed}`);
}

  public findTodoByUser(user: User, todo: Todo[]) {
    const hashed = this.hashed(todo);
    return this._http.get(
      this._baseUrl +
        `/${user.id}` +
        `?todos=${hashed}`
    );
  }

  public createTodo(user: User, createTodo: Todo[]) {
    const hashed = this.hashed(createTodo);
    return this._http.post(
      this._baseUrl +
        `${user.id}` +
        `?todo=${hashed}`,
      createTodo
    );
  }

  public updateTodo(user: User, updatedTodo: Todo[]) {
    const hashed = this.hashed(updatedTodo);
    return this._http.put(
      this._baseUrl +
        `/${user.id}` +
        `?udpated=${hashed}`,
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
    const hashed = this.hashed(deleteAllTodos);
    return this._http.delete(
      this._baseUrl +
        `/${user.id}` +
        `?deleteAll=${hashed}`
    );
}

public hashed(variable: any) {
  return window.crypto.getRandomValues(variable);
}
}
