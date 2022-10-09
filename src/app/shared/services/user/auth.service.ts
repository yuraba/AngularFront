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
    return this.http.post<any>('http://localhost:5251/auth/Auth/register',user);
  }

  public login(user: User): Observable<string>{
    return this.http.post('http://localhost:5251/auth/Auth/login',user,{
      responseType:'text',
    });
  }
  public getMe(): Observable<string> {
    return this.http.get<string>('http://localhost:5251/auth/Auth');
  }
}
