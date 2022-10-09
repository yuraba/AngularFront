import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user/user";
import {AuthService} from "../../shared/services/user/auth.service";




@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user = new User();


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(user:User){
    this.authService.register(user).subscribe();
  }
  login(user:User){
    this.authService.login(user).subscribe((token: string)=> {
      localStorage.setItem('authToken', token);
    });

  }

  getme(){
    this.authService.getMe().subscribe((name:string)=>{
      console.log(name)
    });
  }


}
