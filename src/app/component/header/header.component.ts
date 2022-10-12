import { Component, OnInit } from '@angular/core';
import {ReloadService} from "../../shared/services/reload/reload.service";




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  value = localStorage.getItem('authToken');


  constructor() {}

  ngOnInit(): void {

  }


  exit() {
    localStorage.clear();
    window.location.reload();
  }




}
