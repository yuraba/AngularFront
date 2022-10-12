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
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { AngularFireModule} from "@angular/fire/compat";
import { AngularFireStorageModule} from "@angular/fire/compat/storage";
import { AngularFireAuthModule} from "@angular/fire/compat/auth";
import { AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from "../environments/environment";


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
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { AuthComponent } from './Auth/auth/auth.component';
import { SearchComponent } from './search/search/search.component';




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
    AuthComponent,
    SearchComponent,

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
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatProgressBarModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
