import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { SectionOfferComponent } from './sections/section-offer/section-offer.component';
import { SectionOfferTechComponent } from './sections/section-offer-tech/section-offer-tech.component';
import { SectionsComponent } from './sections/sections.component';
import { SectionOfferTeacherComponent } from './sections/section-offer-teacher/section-offer-teacher.component';
import { RobotsAndAiComponent } from './robots-and-ai/robots-and-ai.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { AllOffersComponent } from './all-offers/all-offers.component';
import { NewsBlogComponent } from './news-blog/news-blog.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { News1Component } from './news1/news1.component';
import { FilterPipe } from './filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    SectionOfferComponent,
    SectionOfferTechComponent,
    SectionsComponent,
    SectionOfferTeacherComponent,
    RobotsAndAiComponent,
    TestimonialComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AllOffersComponent,
    NewsBlogComponent,
    CourseDetailComponent,
    News1Component,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
