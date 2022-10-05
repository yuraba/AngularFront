import { Observable } from "rxjs";
import { Roles } from "./roles";
import { User } from  "../shared/models/user/user"

export class MockedUser {
  public static user: User = {
    age: 10,
    isOnline: true,
    isPrivate: false,
    name: 'Tim',
    order: 43,
    profession: 'manager',
    role: Roles.Admin
  }

  public static user$ = new Observable<User>((u) => {
    setTimeout(() => {
      u.next(this.user)
    })
  })
}
