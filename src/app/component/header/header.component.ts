import { Component, OnInit } from '@angular/core';
import {ReloadService} from "../../shared/services/reload/reload.service";
import {GlobalService} from "../../shared/services/global/global.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalComponent} from "../../modal/modal.component";
import {Subject, takeUntil} from "rxjs";




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  localStorage?: boolean;
  private readonly unsubscribe$ = new Subject<void>();



  constructor(private globalService:GlobalService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.globalService.selectedProduct$.pipe(takeUntil(this.unsubscribe$)).subscribe((value) => {
      this.localStorage = value;
    });
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }


  exit() {
    localStorage.clear();
    this.globalService.setProduct(false)
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
