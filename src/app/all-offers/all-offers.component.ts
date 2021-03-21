import { Component, OnInit } from '@angular/core';
import { CourseList } from '../CourseList';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.css']
})
export class AllOffersComponent implements OnInit {
  courses=CourseList;
  search='';

  constructor(private cartService: CartService) { }

  addToCart(courseItems) {
    window.alert("Your course has been added to the cart!");
    this.cartService.addToCart(courseItems);
  }

  ngOnInit() {

  }


  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.courses = this.courses.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.courses = this.courses.sort((low, high) => high.price - low.price);
          break;
        }

      case "Name":
        {
          this.courses = this.courses.sort(function (low, high) {
            if (low.name < high.name) {
              return -1;
            }
            else if (low.name > high.name) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.courses = this.courses.sort((low, high) => low.price - high.price);
        break;
      }

    }
    return this.courses;

  }
  }


