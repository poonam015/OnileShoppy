import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  userslist: any;
   constructor(private service:UserService){}

  ngOnInit(){
    this.service.getUser().subscribe((res)=>{
      this.userslist=res;
    })
      
    }
  }


