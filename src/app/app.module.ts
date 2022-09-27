import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from "@angular/common/http";
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";



import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';


import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { NewsComponent } from './pages/news/news.component';

import { AdminComponent } from './admin/admin.component';
import { AdminArticleComponent } from './admin/admin-article/admin-article.component';
import { AdminNewComponent } from './admin/admin-new/admin-new.component';



@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    NewsComponent,
    AdminComponent,
    AdminArticleComponent,
    AdminNewComponent,

  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
