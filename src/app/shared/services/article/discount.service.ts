import { Injectable } from '@angular/core';
import {IArticle} from "../../models/article/article.models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  private resourceUrl = environment.BACKEND_URL;
  private api ={
    articles:`${this.resourceUrl}articles`
  }
  private arrArticle: Array<IArticle> = [
    {
      id: 1,
      title: "Міграція ІТ-спеціалістів під час війни: хто куди переїхав і чи готові вертатися",
      body: "Українські ІТ-спеціалісти поступово повертаються додому: у червні 2022 року 40% айтівців перебували в евакуації (в Україні чи за кордоном), а в березні таких було 61%. 27% фахівців переїхали в безпечніше місце в Україні, а 13% релокувалися за кордон.\n" +
        "\n" +
        "У зарплатному опитуванні, яке проходило в червні 2022 року, ми довідалися в ІТ-спеціалістів про їхній досвід евакуації через початок повномасштабної війни з росією та плани щодо повернення додому.\n" +
        "\n" +
        "ІТ-спеціалісти активно повертаються в Київ, а в Харків поки не планують\n" +
        "Найбільше ІТ-спеціалістів виїхало з Харкова, Херсона, Миколаєва та Маріуполя. У червні 2022 року в Харкові лишилося всього 12% айтівців, які жили в місті до початку повномасштабної війни: 6% не виїжджали й 6% повернулися. У Херсоні залишилося 18% ІТ-спеціалістів, у Миколаєві — 26%, і поки що в ці міста практично ніхто не повертається. 25 ІТ-спеціалістів з Маріуполя, які заповнили анкету, нині перебувають поза окупацією — в Україні чи за кордоном. Понад 60% спеціалістів з цих міст переїхали в інші населені пункти в Україні.\n" +
        "\n" +
        "Де живуть зараз з розбивкою за містом, в якому жили до війни",
      image: "data:image/jpeg;base64,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"
    }
  ];
  private url: string;
  constructor(private http: HttpClient) {
    // this.url = 'http://localhost:3000/article';
    this.url = 'http://localhost:5251/api/Product';

  }

  getArticle(): Array<IArticle>{
    return this.arrArticle;
  }
  addArticle(article:IArticle): void{
    this.arrArticle.push(article);
  }

  deleteArticle(id: number): void {
    const index = this.arrArticle.findIndex(art => art.id===id);
    this.arrArticle.splice(index,1);
  }
  updateArticle(article : IArticle): void {
    const index = this.arrArticle.findIndex(art => art.id===article.id);
    this.arrArticle.splice(index,1,article);
  }

  get(): Observable<Array<IArticle>> {

    return this.http.get<Array<IArticle>>(this.url);
  }

  getWithParametr(name: string | undefined): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(`http://localhost:5251/user/${name}`);
  }

  create(article: { image: string; title: string; body: string; IsApproved: string }): Observable<IArticle>{

    return this.http.post<IArticle>(this.url, article);
  }

  delete(id: number): Observable<IArticle>{
    return this.http.delete<IArticle>(`${this.url}/${id}`);
  }

  update(article: { image: string; Id: number; title: string; body: string }, id: number): Observable<IArticle>{
    return this.http.put<IArticle>(`${this.url}/${id}`,article);
  }

  getOneArticle(id: number): Observable<IArticle>{
    return this.http.get<IArticle>(`${this.url}/${id}`);
  }
}


