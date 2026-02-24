import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, shareReplay, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  private allUserSubject = new BehaviorSubject<any[]>([]);
  allUsers$ = this.allUserSubject.asObservable();

  name$ = new BehaviorSubject<string>("katheeb sahib");
  userDetail = new Map<number, any>();
  nameSub$ = new Subject<string>();
  nameBehaviorSub$ = new BehaviorSubject<string>("");

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      tap((res: any) => this.allUserSubject.next(res)),  // Assign response to allUsers
      map((userList: any) => userList.map((user: any) => ({ id: user.id, name: user.name, email: user.email })))
    );
  }
  getUserById(id: number) {

    if (!this.userDetail.has(id)) {
      const userDataObs = this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
        shareReplay({ bufferSize: 1, refCount: true })
      );
      this.userDetail.set(id, userDataObs);
    }
    return this.userDetail.get(id);

  }
}
