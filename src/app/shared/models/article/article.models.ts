export interface IArticle{
  id: number;
  Id?: number;

  title: string;
  body: string;
  image:string;
}

export class Article implements IArticle{
  constructor(
    public id: number,
    public title: string,
    public body: string,
    public image: string,

  ) {}
}
