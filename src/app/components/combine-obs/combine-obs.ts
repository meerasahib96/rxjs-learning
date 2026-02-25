import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { concatMap, exhaustMap, Subject } from 'rxjs';

@Component({
  selector: 'app-combine-obs',
  imports: [ReactiveFormsModule],
  templateUrl: './combine-obs.html',
  styleUrl: './combine-obs.scss'
})
export class CombineObs {
  http = inject(HttpClient);
  users$ = this.http.get('https://jsonplaceholder.typicode.com/users');
  posts$ = this.http.get('https://jsonplaceholder.typicode.com/posts');

  searchProduct = new FormControl()
  loginObs$ = new Subject<void>();
  constructor() {
    // forkJoin([this.users$, this.posts$]).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (err) => {
    //     console.error('Error fetching data:', err);
    //   }
    // });

    this.searchProduct.valueChanges.pipe(
      concatMap((searchTerm) => this.http.get('https://dummyjson.com/products/search?q=' + searchTerm))
    ).subscribe(res => console.log(res));

    this.loginObs$.pipe(
      exhaustMap(() => this.http.get('https://jsonplaceholder.typicode.com/users'))
    ).subscribe(res => console.log(res));
  }

  login() {
    this.loginObs$.next();
  }

}
