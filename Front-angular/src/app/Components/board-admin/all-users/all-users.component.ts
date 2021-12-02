import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { UsersService } from '../../../_services/users.service';
import { Users } from '../../../_models/user.model';

@Component({
  selector: 'board-admin-uses',
  templateUrl: './all-users.component.html'
})
export class BoardAdminUsersComponent implements OnInit {
  users?: Users[];

  constructor(private userService: UserService,
              private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.retrieveUsers();
  }


  retrieveUsers(): void {
    this.usersService.getAll().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      });
  }


}
