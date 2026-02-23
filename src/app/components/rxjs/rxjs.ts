import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'rxjs-basic',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.scss'
})
export class RxjsBasic {
   userService = inject(UserService);
   searchText = new FormControl();
   
   constructor(){
   
    this.userService.getUsers().subscribe(res => console.log(res));
      this.userService.getUserById(1).subscribe(res => console.log(res));
      this.userService.allUsers$.subscribe(res => console.log('All Users from Subject:', res));
      this.searchText.valueChanges.pipe(filter(value => value.length >= 4)).subscribe(value => console.log('Search Text:', value));
   }
  
}
