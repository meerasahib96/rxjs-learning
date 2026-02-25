import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-combine-obs',
  imports: [],
  templateUrl: './combine-obs.html',
  styleUrl: './combine-obs.scss'
})
export class CombineObs {
  http = inject(HttpClient);
  users$ = this.http.get('https://jsonplaceholder.typicode.com/users');
  posts$ = this.http.get('https://jsonplaceholder.typicode.com/posts');

  constructor() {
    forkJoin([this.users$, this.posts$]).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }
}
