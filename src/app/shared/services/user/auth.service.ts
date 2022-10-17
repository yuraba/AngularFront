import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/user/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user: User): Observable<any>{
    return this.http.post('http://localhost:5251/auth/Auth/register',user);
  }


  public login(user: User): Observable<string>{
    return this.http.post('http://localhost:5251/auth/Auth/login',user,{
      responseType:'text',
    });
  }
  public getUser(user: string | undefined): Observable<string>{
    return this.http.get(`http://localhost:5251/api/User/${user}`,{
      responseType:'text',
    });
  }
  public updateUser(user: User): Observable<string>{
    console.log(user)
    return this.http.put(`http://localhost:5251/api/User`,user,{
      responseType:'text',
    });
  }

}
