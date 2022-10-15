import { Component, OnInit } from '@angular/core';
import {ReloadService} from "../../shared/services/reload/reload.service";
import {GlobalService} from "../../shared/services/global/global.service";




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  localStorage?: boolean;


  constructor(private globalService:GlobalService) {}

  ngOnInit(): void {
    this.globalService.selectedProduct$.subscribe((value) => {
      this.localStorage = value;
    });
  }


  exit() {
    localStorage.clear();
    this.globalService.setProduct(false)
  }
}
