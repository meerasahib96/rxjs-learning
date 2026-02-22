import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'rxjs-basic',
  imports: [],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.scss'
})
export class RxjsBasic {
  cityList$ = of('Delhi', 'Mumbai', 'Bangalore', 'Chennai');
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
  }
}
