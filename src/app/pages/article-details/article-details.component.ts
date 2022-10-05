import { Component, OnInit } from '@angular/core';
import {DiscountService} from "../../shared/services/article/discount.service";
import {ActivatedRoute} from "@angular/router";
import {IArticle} from "../../shared/models/article/article.models";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article!: IArticle;

  constructor(
    private articleService: DiscountService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.loadArticle();
  }

  loadArticle(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.articleService.getOneArticle(id).subscribe(data => {
        this.article = data;
    });
  }

}
