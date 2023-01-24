import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { Article, News } from '../../models/news';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  articles: Article[];
  total: number;
  news: News;

  constructor(
                public navCtrl: NavController, 
                public navParams: NavParams,
                public newsServPro: NewsServiceProvider
                ) {
  }

  getNews(): void{
    this.newsServPro.getNews().subscribe(
      (news) =>{
        this.news = news;
        this.total = this.news.totalResults;
        this.articles = news.articles;
      }
    )
  }

  ionViewWillEnter(){
    this.getNews();
  }


}
