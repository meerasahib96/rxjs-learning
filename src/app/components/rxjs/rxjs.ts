import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'rxjs-basic',
  imports: [],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.scss'
})
export class RxjsBasic {
   userService = inject(UserService);
   
   constructor(){
    this.userService.getUsers().subscribe(res => console.log(res));
      this.userService.getUserById(1).subscribe(res => console.log(res));
   }
  
}
