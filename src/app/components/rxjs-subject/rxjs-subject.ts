import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-rxjs-subject',
  imports: [],
  templateUrl: './rxjs-subject.html',
  styleUrl: './rxjs-subject.scss'
})
export class RxjsSubject implements OnInit, OnDestroy {
  name$ = new Subject();
  number$ = new Subject<number>();

  userService = inject(UserService);
  router = inject(Router);
  destroy$ = new Subject<void>();
  constructor() {
    // this.userService.name$.next('safiya')

    // setTimeout(() => {
    //   this.name$.next('katheeb');
    //   this.number$.next(100);
    // }, 2000);
  }

  ngOnInit() {

    // this.userService.name$.next('mohamed');
    // this.userService.name$.next('katheeb');


  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onNameChange(event: any) {
    const newName = event.target.value;
    this.userService.nameSub$.next(newName);
    this.userService.nameBehaviorSub$.next(newName);
    //this.router.navigate(['/rxjs-basic']);
  }

  getUserById(id: number) {
    this.userService.getUserById(id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (user: any) => {
        console.log('User Detail:', user);
        this.router.navigate(['/rxjs-basic']);
      },
      error: (err: any) => {
        console.error('Error fetching user details:', err);
      }
    });
  }

}
