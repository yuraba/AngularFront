import {Component, OnInit} from '@angular/core';
import {GlobalService} from "./shared/services/global/global.service";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'untitled2';
  constructor(private globalService:GlobalService) {
  }
  getDecodedAccessToken(token: string): any {
    try {
      console.log(token, jwt_decode(token))
      return jwt_decode(token);

    } catch(Error) {
      return null;
    }
  }
  ngOnInit() {

    const receivedToken = localStorage.getItem('authToken');
    if (receivedToken){
      const parsedToken = JSON.parse(receivedToken);
      if (parsedToken) {
        const tokenInfo = this.getDecodedAccessToken(parsedToken.token);
        this.globalService.setProduct(true);
        this.globalService.setUser({
          Role: tokenInfo.role,
          Username: tokenInfo.username,
          Id: tokenInfo.user_id
        })
      }
    }
  }
}
