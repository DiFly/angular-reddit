export class Article {
  votes: number;
  title: string;
  link: string;
  domain: string;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
    this.domain = 'testdomain';
  }
}
