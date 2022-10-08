import { Component, OnInit } from '@angular/core';
import {DiscountService} from "../../shared/services/article/discount.service";
import {IArticle} from "../../shared/models/article/article.models";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.css']
})
export class AdminArticleComponent implements OnInit {

  public adminArticle: Array<IArticle> = [];
  public articleForm!: FormGroup;
  public customImage = "data:image/jpeg;base64,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" +
    "+EkkiBVPSC2jSSTZoXJJJAP/9k=";
  title: string = '';
  body: string = '';
  isEdit = false;
  articleId: number = 0;
  image: string = '';
  public uploadPercent: Observable<number> | undefined | null;
  imageStatus: boolean = false;


  constructor(
    private discountService: DiscountService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.initArticleForm();
    this.loadArticle();
  }
  initArticleForm(): void{
    this.articleForm = this.fb.group({
      title: [null,Validators.required],
      body: [null,Validators.required],
      image: this.image
    })
  }
  loadArticle(): void{
    // this.adminArticle = this.discountService.getArticle();
    this.discountService.get().subscribe(data => {
        console.log(data);
      this.adminArticle = data;
    },
      error => {
        console.log(error);
        // this.toastr.error(error.message, error.title)
      }

    )
  }

  createArticle(): void{
    // this.discountService.addArticle(this.articleForm.value);
    if(this.title && this.body){
      const newArticle ={
        title: this.title,
        body: this.body,
        image: this.customImage
      }
    }
    // this.discountService.create(this.articleForm.value).subscribe(() => {
    this.discountService.create(this.articleForm.value).subscribe(() => {
        this.initArticleForm();
        this.loadArticle();
    },
      error => {
        console.log(error)
      })

    this.articleForm.reset();
    this.imageStatus = false;
    // this.discountService.get().subscribe(data => {
    //   if(data){
    //     this.adminArticle = data;
    //   }
    // })
  }
  deleteArticle(article: IArticle): void{
    this.discountService.delete(article.id).subscribe(() => {
        this.initArticleForm();
        this.loadArticle();
      },
      error => {
        console.log(error)
      });

  }

  editArticle(article: IArticle): void {
    this.isEdit = true;
    this.articleId = article.id;
    this.title = article.title;
    this.body = article.body;

  }

  updateArticle(): void{
    if(this.title && this.body){
      const newArticle ={
        id: this.articleId,
        title: this.articleForm.value.title,
        body: this.articleForm.value.body,
        image: this.articleForm.value.image
      }
      this.discountService.update(newArticle,this.articleId).subscribe(

        () => {
          this.initArticleForm();
          this.loadArticle();
        },
        error => {
          console.log(error)
        });

      this.title = '';
      this.body='';
      this.isEdit = false;
      this.articleId!=null;
    }

  }
  uploadFile(event: any): void{
      const file = event.target.files[0];
      const filePath =`images/${file.name}`;
      const task = this.storage.upload(filePath, file);
      this.uploadPercent = task.percentageChanges() as Observable<number>;
      task.then(image => {
        this.storage.ref(`images/${image.metadata.name}`).getDownloadURL().subscribe(url =>{
          this.image = url;
          this.articleForm.patchValue({
            image: this.image
          })
          this.imageStatus = true;
          this.uploadPercent=null;
        });
      });
  }
  deleteFile(article?: IArticle): void{
      const pathImage = article?.image || this.image;
      this.storage.storage.refFromURL(pathImage).delete().then(
        () => {
          console.log('Image deleted');
          this.image='';
          this.imageStatus= false;
        }
      ).catch(err=> console.log(err));
  }
}
