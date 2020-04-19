import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
@Injectable()
export class NewsService {

  // ! I need a Kenya new API 
  // private keApi   = 'https://newsapi.org/v2/top-headlines?country=gb&apiKey='+environment.apiKey;

  private newsApi = 'https://newsapi.org/v2/everything?q=news&apiKey='+environment.apiKey;
  private gbApi = 'https://newsapi.org/v2/top-headlines?country=gb&apiKey='+environment.apiKey;
  private deApi = 'https://newsapi.org/v2/top-headlines?country=de&apiKey='+environment.apiKey;
  private usaApi  = 'https://newsapi.org/v2/top-headlines?country=us&apiKey='+environment.apiKey;
  private caApi = 'https://newsapi.org/v2/top-headlines?country=ca&apiKey='+environment.apiKey;
  private auApi = 'https://newsapi.org/v2/top-headlines?country=au&apiKey='+environment.apiKey;
  private jpApi = 'https://newsapi.org/v2/top-headlines?country=jp&apiKey='+environment.apiKey;
  
  private showThis  = '&category=';
  private country ='&country=';

  constructor(private http: HttpClient) { }
  
  newsInt() {
    return this.http.get<any>(this.newsApi);
  }

  getSportsGB(query) {
    console.log(query)
    return this.http.get<any>(this.gbApi+this.showThis+`${query}`);
  }

  getSportsDE(query) {
    return this.http.get<any>(this.deApi+this.showThis+`${query}`);
  }

  getSportsUSA(query) {
    return this.http.get<any>(this.usaApi+this.showThis+`${query}`);
  }

  getSportsCA(query) {
    return this.http.get<any>(this.caApi+this.showThis+`${query}`);
  }

  getSportsAU(query) {
    return this.http.get<any>(this.auApi+this.showThis+`${query}`);
  }
  
  getSportsJP(query) {
    return this.http.get<any>(this.jpApi+this.showThis+`${query}`);
  }

}


