import { Component, OnInit } from '@angular/core';
import {MockedUser} from "../../mock-data/mocked-user";
import {User} from "../../shared/models/user/user";
import { Roles } from "../../mock-data/roles";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public  mockedUser = MockedUser;
  public  user!: User;
  public  role!: Roles;


  constructor() { }

  ngOnInit(): void {
    this.bb();
  }

  bb(): void{
    console.log(this.user.role)
  }


}
