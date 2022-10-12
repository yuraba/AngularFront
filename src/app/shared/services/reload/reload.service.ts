import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: "root"})
export class ReloadService {

  private product$ = new BehaviorSubject<any>({});
  selectedProduct$ = this.product$.asObservable();
  constructor() {}

  setProduct(product: any) {
    this.product$.next(product);
  }
}
