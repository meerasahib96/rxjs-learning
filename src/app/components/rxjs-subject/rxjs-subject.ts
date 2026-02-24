import { Component, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-rxjs-subject',
  imports: [],
  templateUrl: './rxjs-subject.html',
  styleUrl: './rxjs-subject.scss'
})
export class RxjsSubject implements OnInit {
  name$ = new Subject();
  number$ =new Subject<number>();

  userService = inject(UserService);
  constructor() {
    this.userService.name$.next('safiya')

    setTimeout(() => {
      this.name$.next('katheeb');
      this.number$.next(100);
    }, 2000);
  }

  ngOnInit() {
    this.name$.subscribe(name => {
      console.log(name);
    });
    this.number$.subscribe(number => {
      console.log(number);
    });
    this.name$.next('mohamed');
    this.number$.next(7);

    this.userService.name$.subscribe(name => {
      console.log('UserService name:', name);
    });
    this.userService.name$.next('mohamed');
    this.userService.name$.next('katheeb');
  }

}
