import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { UsersService } from '../../_services/users.service';
import { Users } from '../../_models/user.model';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styles:[`

  `]
})
export class BoardAdminComponent implements OnInit {
  users?: Users[];
  currentIndex = -1;
  name = '';

  constructor(private userService: UserService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.retrieveUsers();

  }


  retrieveUsers(): void { //TODO show this data
    this.usersService.getAll().subscribe(
        data => {
          this.users = data;
          console.log("halo?",data);
        },
        error => {
          console.log(error);
        });
  }


}
