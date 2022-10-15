import { Component, OnInit } from '@angular/core';
import {DiscountService} from "../../shared/services/article/discount.service";
import {IArticle} from "../../shared/models/article/article.models";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {Subject, takeUntil} from "rxjs";


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']


})
export class ArticlesComponent implements OnInit {

  public userArticles: Array<IArticle> = [];
  private readonly unsubscribe$ = new Subject<void>();



  constructor(
    private discountService: DiscountService,

  ) { }

  ngOnInit(): void {
    this.loadArticle();
  }

  searchText: string = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;

  }

  loadArticle(): void {
      // this.userArticles = this.discountService.getArticle();
    // console.log(this.userArticles);
    this.discountService.get().pipe(takeUntil(this.unsubscribe$)).subscribe(
      data =>{
        if(data){

          this.userArticles = data;

        }
      },
      error =>
      {
        console.log(error);
      }
    );
}

}
