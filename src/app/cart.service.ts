import { Injectable } from '@angular/core';
import { CourseList } from './CourseList';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  courseItems = [];

  constructor() { }

  addToCart(item) {
    this.courseItems.push(item);
    console.log(this.courseItems);
  }

  getCourseItems() {
    return this.courseItems;
  }

  getLength() {
    return this.courseItems.length;
  }

  clearCart() {
    this.courseItems = [];
    return this.courseItems;
  }


}
