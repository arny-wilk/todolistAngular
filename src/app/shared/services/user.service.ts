import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Services } from './services';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _baseUrl = 'http://localhost:3000/users';

  constructor(private _http: HttpClient) {
    this.findAll();
  }

  public findAll() {
    this._http.get(this._baseUrl).subscribe((users) => {
      console.log(`data : `, users);
    });
  }

  public findById(id: string) {
    this._http.get(this._baseUrl + `/${id}`).subscribe((user) => {
      console.log(`user : `, user);
    });
  }

  public create() {}

  public update() {}

  public delete() {}
}
