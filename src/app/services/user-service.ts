import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  private allUserSubject = new BehaviorSubject<any[]>([]);
  allUsers$ = this.allUserSubject.asObservable();

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      tap((res: any) => this.allUserSubject.next(res)),  // Assign response to allUsers
      map((userList: any) => userList.map((user: any) => ({id: user.id, name: user.name, email: user.email})))
    );
  }
  getUserById(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
      map((user:any) => user.address)
    );
  }
}
