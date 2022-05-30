import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar) {}



  ngOnInit(): void {
  }

  onSubmit(): void {
    const {username, email, password} = this.form;

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this._snackBar.open(`Your registration is successful! You can login now!`, 'OK', {
          duration: 10000
        });
        this.router.navigate(['login'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
