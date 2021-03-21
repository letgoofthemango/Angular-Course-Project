import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { news } from '../news';

@Component({
  selector: 'app-news1',
  templateUrl: './news1.component.html',
  styleUrls: ['./news1.component.css']
})
export class News1Component implements OnInit {
news;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.news = news[+params.get('newsId')];
  });

}
}
