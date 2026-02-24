import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  router = inject(Router);
  constructor() {
    this.userService.name$.next('safiya')

    setTimeout(() => {
      this.name$.next('katheeb');
      this.number$.next(100);
    }, 2000);
  }

  ngOnInit() {
  
    this.userService.name$.next('mohamed');
    this.userService.name$.next('katheeb');
  }

  onNameChange(event: any) {
    const newName = event.target.value;
    this.userService.nameSub$.next(newName);
    this.userService.nameBehaviorSub$.next(newName);
    this.router.navigate(['/rxjs-basic']);
  }

}
