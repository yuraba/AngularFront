export interface IArticle{
  id: number;
  title: string;
  text: string;
  image:string;
}

export class Article implements IArticle{
  constructor(
    public id: number,
    public title: string,
    public text: string,
    public image: string,

  ) {}
}
