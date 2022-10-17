import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {Observable, Subject, takeUntil} from "rxjs";
import {User} from "../shared/models/user/user";
import {DiscountService} from "../shared/services/article/discount.service";
import {AuthService} from "../shared/services/user/auth.service";
import {GlobalService} from "../shared/services/global/global.service";
import {IArticle} from "../shared/models/article/article.models";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {logEvent} from "@angular/fire/analytics";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  user?:any
  image?:string = 'f'
  private readonly unsubscribe$ = new Subject<void>();
  public uploadPercent: Observable<number> | undefined | null;
  imageStatus: boolean = false;
  public articleForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalComponent> ,private userService: AuthService,private globalService: GlobalService, private storage: AngularFireStorage,private fb: FormBuilder,) {
  }

  ngOnInit() {
    this.globalService.selectedUser$.pipe(takeUntil(this.unsubscribe$)).subscribe((value) => {
      this.user = value;
      console.log('zdarova',this.user)
    });
    this.userService.getUser(this.user?.Id).pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      this.user = JSON.parse(data);
      console.log(this.user)
    });
    this.articleForm = this.fb.group({
      title: ['',Validators.required],
      body: ['',Validators.required],
      image: this.image
    })
  }

  uploadFile(event: any): void{
    const file = event.target.files[0];
    const filePath =`images/${file.name}`;
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges() as Observable<number>;
    task.then(image => {
      this.storage.ref(`images/${image.metadata.name}`).getDownloadURL().pipe(takeUntil(this.unsubscribe$)).subscribe(url =>{
        this.image = url;
        this.articleForm.patchValue({
          image: this.image
        })
        this.imageStatus = true;
        this.uploadPercent=null;
      });
    });
  }
  deleteFile(user?: User ): void{
    const pathImage = this.image || 'g';
    console.log(pathImage)
    this.storage.storage.refFromURL(pathImage).delete().then(
        () => {
          console.log('Image deleted');
          this.image='';
          this.articleForm.value.image = ''
          this.imageStatus= false;
        }
    ).catch(err=> console.log(err));
  }

  updateUser(): void{
      const UpdatedUser ={
        Id: this.user.id,
        Username: this.articleForm.value.title,
        image: this.articleForm.value.image,
      }
      console.log(this.user.id);
      this.userService.updateUser(UpdatedUser).pipe(takeUntil(this.unsubscribe$)).subscribe(
          () => {
            console.log(this.user.id);

          },
          error => {
            console.log(error)
          });
      this.userService.getUser(this.user?.id).pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      this.user = JSON.parse(data);
      console.log(this.user.id);
      console.log('hach',this.user);
    });

  }

  actionFunction() {
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
  exit() {
    localStorage.clear();
    this.globalService.setProduct(false)
    this.globalService.setUser({
      Username: this.user.username,
      Id: this.user.id,
      Role:this.user.role
    })
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
