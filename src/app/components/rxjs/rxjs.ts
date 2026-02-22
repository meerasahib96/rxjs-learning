import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'rxjs-basic',
  imports: [],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.scss'
})
export class RxjsBasic {
  constructor(){
   const myObservable$ = new Observable(val => val.next('Hello World!'));
    myObservable$.subscribe(val => console.log(val));
  }
}
