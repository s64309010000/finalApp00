import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { News } from '../../models/news';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class NewsServiceProvider {

  urlAPI: string = 'https://newsapi.org/v2/top-headlines?country=th&apiKey=e7edda623a5545f08d585bd55fc957e8';

  constructor(public http: HttpClient) {
  }

  getNews():Observable<News>{
    return this.http.get<News>(this.urlAPI).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse){
    return new ErrorObservable(error);
  }
  
}
