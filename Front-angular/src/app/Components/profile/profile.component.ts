import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;


  profileForm:FormGroup
  private firstName:FormControl
  private lastName: FormControl

  constructor(private token: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);


        this.firstName = new FormControl(this.currentUser.email, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.currentUser.email, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel(){
    this.router.navigate(['events'])
  }
  saveProfile(formValues: any){
      if(this.profileForm.valid){
        //this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events'])
    }
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }
  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }
}
