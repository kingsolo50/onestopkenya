import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  data: any;

  constructor(private api: NewsService) { }

  ngOnInit() {
    this.newsFeed();
  }

  newsFeed() {
    this.api.newsInt().subscribe(
      data => {
        console.log(data);
        this.data = data;      
      }, err => {
        console.log(err);
      }
    )
  }
  
  loadDEFeed(x) {
    
    const query = x; 
    
    // return console.log(query); 

    this.api.getSportsDE(query).subscribe(
      data => {
        this.data = data;
        console.log(data);
      }, err => {
        console.log(err);
      }
    )

  }

  loadCAFeed(x) {
    
    const query = x; 
    
    // return console.log(query); 

    this.api.getSportsCA(query).subscribe(
      data => {
        this.data = data;
        console.log(data);
      }, err => {
        console.log(err);
      }
    )

  }

  loadAUFeed(x) {
    
    const query = x; 
    
    // return console.log(query); 

    this.api.getSportsAU(query).subscribe(
      data => {
        this.data = data;
        console.log(data);
      }, err => {
        console.log(err);
      }
    )

  }

  loadUSAFeed(x) {
    
    const query = x; 
    
    // return console.log(query); 

    this.api.getSportsUSA(query).subscribe(
      data => {
        this.data = data;
        console.log(data);
      }, err => {
        console.log(err);
      }
    )

  }

  loadJPFeed(x) {
    
    const query = x; 
    
    // return console.log(query); 

    this.api.getSportsJP(query).subscribe(
      data => {
        this.data = data;
        console.log(data);
      }, err => {
        console.log(err);
      }
    )

  }


  loadGBFeed(x) {
    
    const query = x; 
    
    // return console.log(query); 

    this.api.getSportsGB(query).subscribe(
      data => {
        this.data = data;
        console.log(data);
      }, err => {
        console.log(err);
      }
    )

  }

}
