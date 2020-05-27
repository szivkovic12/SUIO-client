import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { UserCredentials } from './user-credentials.model';
import { JwtToken } from './jwt-token.model';
import { User } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  authenticating = false; // to show loading
  loginFailed = false; // to show login failed message

  userCredentials: UserCredentials;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userCredentials=new UserCredentials();
  }

  login() {
    this.authenticating = true;
    this.loginFailed = false;

    this.loginService.authenticate(this.userCredentials).subscribe(
      (jwtToken: JwtToken) => this.successfulLogin(jwtToken),
      () => this.loginFailed = true
    ).add(() => this.authenticating = false);
  }

  successfulLogin(jwtToken: JwtToken) {
    localStorage.setItem('token', jwtToken.token); // store token value to localstorage
    this.userService.getCurrentUser().subscribe((currentUser: User) => this.userService.currentUser = currentUser);
    this.router.navigate(['/home']);
  }

}
