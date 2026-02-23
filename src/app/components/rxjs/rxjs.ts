import { Component } from '@angular/core';
import { from, interval, map, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'rxjs-basic',
  imports: [],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.scss'
})
export class RxjsBasic {
  cityList$ = of(['Delhi', 'Mumbai', 'Bangalore', 'Chennai']);
  number$ = from ([1, 2, 3, 4, 5]);
  interval$ = interval(1000);
  timer$ = timer(3000, 3000);
  numbers$ = of([1, 2, 3, 4, 5]);
  constructor(){
   const myObservable$ = new Observable(val => {
     val.next('Hello');
     val.next('World!');
     val.complete();
   });
    // myObservable$.subscribe({
    //   next: (val) => console.log(val),
    //   complete: () => console.log('Completed')
    // });
    // this.cityList$.subscribe( val => console.log(val));
    // this.number$.subscribe( val => console.log(val));
    // this.interval$.pipe(take(10)).subscribe( val => console.log(val));
    // this.timer$.pipe(take(5)).subscribe( val => console.log('timer executed', val));

    this.numbers$.pipe(map(val => val.map(v => v * 2))).subscribe( val => console.log(val));
  }
}
