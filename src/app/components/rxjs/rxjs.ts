import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'rxjs-basic',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.scss'
})
export class RxjsBasic implements OnInit, OnDestroy {
   userService = inject(UserService);
   router = inject(Router);
   searchText = new FormControl();
   private destroy$ = new Subject<void>();  // For unsubscribing
   
   ngOnInit(){
      this.userService.nameSub$.pipe(takeUntil(this.destroy$)).subscribe(name => console.log('Name from Subject:', name));
      this.userService.nameBehaviorSub$.pipe(takeUntil(this.destroy$)).subscribe(name => console.log('Name from BehaviorSubject:', name));
   }

   ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
   }

   onSearchChange(){
    this.userService.nameSub$.next(this.searchText.value || '');
    this.userService.nameBehaviorSub$.next(this.searchText.value || '');
    this.router.navigate(['/rxjs-subject']);
   }
}
