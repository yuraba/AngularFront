import { Component, OnInit } from '@angular/core';
import {IArticle} from "../../shared/models/article/article.models";
import {Subject, takeUntil} from "rxjs";
import {DiscountService} from "../../shared/services/article/discount.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public adminArticle: Array<IArticle> = [];
  private readonly unsubscribe$ = new Subject<void>();


  constructor(
    private discountService: DiscountService,
  ) {
  }

  ngOnInit(): void {
    this.loadArticle();

  }

  loadArticle(): void {
    this.discountService.get().pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
        this.adminArticle = data;
      },
      error => {
        console.log(error);
        // this.toastr.error(error.message, error.title)
      })
  }
}
