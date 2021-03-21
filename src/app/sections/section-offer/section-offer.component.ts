import { Component, OnInit } from '@angular/core';
import { CourseList } from '../../CourseList';


@Component({
  selector: 'app-section-offer',
  templateUrl: './section-offer.component.html',
  styleUrls: ['./section-offer.component.css']
})
export class SectionOfferComponent implements OnInit {
  courses=CourseList;
  constructor() { }

  ngOnInit(): void {
  }

}
