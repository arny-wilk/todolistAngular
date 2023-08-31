import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Services } from './todos.service';
import { User } from '../models/user';
import { environment } from 'src/environments/environment.development';

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

  public findTodoByUser(user: User, id: string) {
    return this._http.get(
      this._baseUrl +
        `/${user.id}` +
        `?todos=${user.todos.findIndex(obj => obj.id === id)}`
    );
  }

  public createTodo(createTodo: User, id: string) {
    return this._http.post(
      this._baseUrl +
        `${createTodo.id}` +
        `?todo=${createTodo.todos.findIndex((obj) => obj.id === id)}`,
      createTodo
    );
  }

  public updateTodo(updatedTodo: User, id: string) {
    return this._http.patch(
      this._baseUrl +
        `/${updatedTodo.id}` +
        `?udpated=${updatedTodo.todos.findIndex((todo) => todo.id === id)}`,
      updatedTodo
    );
  }

  public deleteTodoById(deleteTodo: User, id: string) {
    return this._http.delete(
      this._baseUrl +
        `/${deleteTodo.id}` +
        `?deleteTodo=${deleteTodo.todos.findIndex((todo) => todo.id === id)}`
    );
  }

  public deleteAllTodos(deleteAllTodos: User) {
    return this._http.delete(
      this._baseUrl +
        `/${deleteAllTodos.id}` +
        `?deleteAll=${deleteAllTodos.todos}`
    );
  }
}
