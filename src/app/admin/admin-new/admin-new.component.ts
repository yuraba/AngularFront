import { Component, OnInit } from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {DiscountService} from "../../shared/services/article/discount.service";
import {IArticle} from "../../shared/models/article/article.models";

@Component({
  selector: 'app-admin-new',
  templateUrl: './admin-new.component.html',
  styleUrls: ['./admin-new.component.css']
})
export class AdminNewComponent implements OnInit {
  public adminArticle: Array<IArticle> = [];
  private readonly unsubscribe$ = new Subject<void>();


  constructor(
    private discountService: DiscountService,

  ) { }

  ngOnInit(): void {
    this.loadArticle();

  }
  loadArticle(): void{
    this.discountService.get().pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
        this.adminArticle = data;
      },
      error => {
        console.log(error);
        // this.toastr.error(error.message, error.title)
      })
  }
}
