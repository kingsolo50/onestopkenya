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
    this.api.getSportsGB().subscribe(
      data => {
        console.log(data);
        // this.data = data;      
      }, err => {
        console.log(err);
      }
    )
  }
}
