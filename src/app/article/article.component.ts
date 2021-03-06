import {Component, Input, OnInit} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor() {
    this.article = new Article('Angular 2', 'http://angular.io', 10);

  }

  voteUp(): boolean {
    // @ts-ignore
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    // @ts-ignore
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
