import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
@Injectable()
export class NewsService {

  // ! I need a Kenya new API 
  // private keApi   = 'https://newsapi.org/v2/top-headlines?country=gb&apiKey='+environment.apiKey;

  private newsApi = 'https://www.bbc.co.uk/sport/football';
  
  constructor(private http: HttpClient) { }

  getSportsGB() {
    // console.log(query)
    return this.http.get<any>(this.newsApi);
  }

}


