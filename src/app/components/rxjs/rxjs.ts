import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'rxjs-basic',
  imports: [],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.scss'
})
export class RxjsBasic {
  cityList$ = of(['Delhi', 'Mumbai', 'Bangalore', 'Chennai']);
  number$ = from ([1, 2, 3, 4, 5]);
  constructor(){
   const myObservable$ = new Observable(val => {
     val.next('Hello');
     val.next('World!');
     val.complete();
   });
    myObservable$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Completed')
    });
    this.cityList$.subscribe( val => console.log(val));
    this.number$.subscribe( val => console.log(val));
  }
}
