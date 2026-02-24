import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-subject',
  imports: [],
  templateUrl: './rxjs-subject.html',
  styleUrl: './rxjs-subject.scss'
})
export class RxjsSubject implements OnInit {
  name$ = new Subject();
  number$ =new Subject<number>();
  constructor() {

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
  }

}
