import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any
  password: any
  mouseoverLogin: any
  constructor(private authService: AuthService, private router:Router)
  {}

  login(formValues: any){
      this.authService.loginUser(formValues.userName, formValues.password)
      this.router.navigate(['user/profile'])
      console.log(formValues.userName, formValues.password)
  }

  cancel(){
      this.router.navigate(['/'])
  }

  ngOnInit(): void {

  }

}
