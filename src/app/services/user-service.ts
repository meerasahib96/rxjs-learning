import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
     map((userList:any) => userList.map((user:any) => ({id: user.id, name: user.name, email: user.email})))
    )
  }
  getUserById(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
      map((user:any) => user.address)
    );
  }
}
