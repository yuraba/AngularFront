import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user/user";
import {AuthService} from "../../shared/services/user/auth.service";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {GlobalService} from "../../shared/services/global/global.service";
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user = new User();
  private readonly unsubscribe$ = new Subject<void>();


  constructor(private authService: AuthService, private router:Router, private globalService: GlobalService) {
  }

  ngOnInit(): void {
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);

    } catch(Error) {
      return null;
    }
  }
  register(user: User) {
    if (this.router.url === '/login/admin'){
      user.Role = 'Admin'
    }
    else {
      user.Role = 'User'
    }
    this.authService.register(user).pipe(takeUntil(this.unsubscribe$)).subscribe();
  }

  login(user: User) {

    this.authService.login(user).pipe(takeUntil(this.unsubscribe$)).subscribe((token: string) => {
      localStorage.setItem('authToken', JSON.stringify({
        token
      }));
      this.router.navigate(['/home']);

      const receivedToken = localStorage.getItem('authToken');
      if (receivedToken){
        const parsedToken = JSON.parse(receivedToken);
        const tokenInfo = this.getDecodedAccessToken(parsedToken.token);
        if (parsedToken) {
          this.globalService.setProduct(true);
          this.globalService.setUser({
            Role: tokenInfo.role,
            Username: tokenInfo.username,
            Id:tokenInfo.user_id
          })
        }
      }
    })
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
