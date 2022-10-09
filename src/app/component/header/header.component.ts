import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  value = localStorage.getItem('authToken');


  constructor() {
  }

  ngOnInit(): void {

  }




}
