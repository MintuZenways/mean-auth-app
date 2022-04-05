import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  users:any = [];

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    
    //console.log(this.users);
    this.getUsers();
  }

  getUsers(){
    return this.userService.getUsers().subscribe((res) =>{
      // console.log(res);
      this.users = res;
      console.log(this.users);
     })
  }

}
