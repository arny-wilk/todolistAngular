import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Services } from './services';
import { User } from '../models/user';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _baseUrl = environment.urlApi.users

  constructor(private _http: HttpClient) {
    this.findAll();
  }

  public findAll() {
  return  this._http.get<User[]>(this._baseUrl);

  }

  public findById(id: string) {
    return this._http.get<User>(this._baseUrl + `/${id}`);
  }

  public create(created: User) {
    return this._http.post(this._baseUrl, created);
  }

  public update(updated: User) {
    return this._http.put(this._baseUrl + `/${updated.id}`, updated)
  }

  public delete(user: User) {
   return this._http
      .delete(this._baseUrl + `/${user.id}`)
  }
}
