import { Injectable } from '@angular/core';
import {User} from '../classes/user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private APIURL = environment.APIURL + 'user/';
  users: Array<User> = [];

  constructor(private http: HttpClient) { }

  getUsers(): any {
    const url = this.APIURL + 'all';
    return this.http.get(url, {responseType: 'json'});
  }

  getUserById(id: number): any{
    const url = this.APIURL + id;
    return this.http.get(url, { responseType: 'json'});
  }

  updateUser(user: User){

    const url = this.APIURL + 'update';

    return this.http.put(url, {
      idUser: user.idUser,
      name: user.name,
      lastname: user.lastname,
      fiscalcode: user.fiscalcode,
      age: user.age,
      phone: user.phone,
      email: user.email,
      province: user.province
    });
  }

  deleteUser(user: User){
    const url = this.APIURL + 'delete/' + user.idUser;
    return this.http.delete(url);
  }

  addUser(user: User): Observable<any>{
    const url = this.APIURL + 'add';
    return this.http.post(url, {
      idUser: user.idUser,
      name: user.name,
      lastname: user.lastname,
      fiscalcode: user.fiscalcode,
      age: user.age,
      phone: user.phone,
      email: user.email,
      province: user.province
    });
  }
}
