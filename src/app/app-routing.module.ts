import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { NewsComponent } from './pages/news/news.component';

import { AdminComponent } from './admin/admin.component';
import { AdminArticleComponent } from './admin/admin-article/admin-article.component';
import { AdminNewComponent } from './admin/admin-new/admin-new.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'article', component:ArticlesComponent},
  {path: 'article/:name', component:ArticleDetailsComponent},
  {path: 'news', component:NewsComponent},
  {path: 'admin', component:AdminComponent, children: [
      {path: '', pathMatch:'full', redirectTo:'Article'},
      {path: 'Article', component:AdminArticleComponent},
      {path: 'News', component:AdminNewComponent}
    ]},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
