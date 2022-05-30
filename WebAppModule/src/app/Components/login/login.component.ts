import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this._snackBar.open(` Log in successful`, 'OK', {
        duration: 10000
      });
      this.router.navigate(['MyProducts'])
    }
  }

  onSubmit(): void {
    const {username, password} = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        window.location.reload();

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
