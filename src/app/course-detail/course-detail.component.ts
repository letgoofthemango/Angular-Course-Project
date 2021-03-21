import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { CourseList } from '../CourseList';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
	course;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(courseItems) {
    window.alert("Your course has been added to the cart!");
    this.cartService.addToCart(courseItems);
  }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
	this.course = CourseList[+params.get('courseId')];
  });
  }

}
