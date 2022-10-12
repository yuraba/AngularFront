import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user/user";
import {AuthService} from "../../shared/services/user/auth.service";
import {DiscountService} from "../../shared/services/article/discount.service";
import {IArticle} from "../../shared/models/article/article.models";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {ReloadService} from "../../shared/services/reload/reload.service";





@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user = new User();
  private readonly unsubscribe$ = new Subject<void>();


  constructor(private authService: AuthService,




  ) {
  }

  ngOnInit(): void {
  }

  register(user: User) {
    this.authService.register(user).pipe(takeUntil(this.unsubscribe$)).subscribe();
  }

  login(user: User) {
    this.authService.login(user).pipe(takeUntil(this.unsubscribe$)).subscribe((token: string) => {
      localStorage.setItem('authToken', token);



    })
  }



}
