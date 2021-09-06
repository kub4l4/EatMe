import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { UsersService } from '../../../_services/users.service';
import { Users } from '../../../_models/user.model';
import { ICategory } from "../../../_models/category.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector : 'board-admin-uses',
  templateUrl : './all-users.component.html'
})
export class BoardAdminUsersComponent implements OnInit {
  users? : Users[];
  categories: ICategory[]

  constructor(private userService : UserService,
              private usersService : UsersService) {
  }

  ngOnInit() : void {
    this.retrieveUsers();
  }


  retrieveUsers() : void {
    this.usersService.getAll().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      });
  }


}
