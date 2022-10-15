import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {User} from "../../models/user/user";

@Injectable({
  providedIn: "root"
})
export class GlobalService {
  private authToken$ = new BehaviorSubject<boolean>(false);
  selectedProduct$ = this.authToken$.asObservable();
  private user = new BehaviorSubject<User>({Password: "", Role: "User", Username: ""});
  selectedUser$ = this.user.asObservable();
  constructor() {}

  setProduct(product: boolean) {
    this.authToken$.next(product);
  }

  setUser(user: User) {
    this.user.next(user);
  }
}
