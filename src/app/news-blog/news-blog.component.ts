import { Component, OnInit } from '@angular/core';
import { news } from '../news';

@Component({
  selector: 'app-news-blog',
  templateUrl: './news-blog.component.html',
  styleUrls: ['./news-blog.component.css']
})
export class NewsBlogComponent implements OnInit {
 news = news;
  constructor() { }

  ngOnInit(): void {
  }

}
