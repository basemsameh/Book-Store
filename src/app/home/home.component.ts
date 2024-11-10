import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  OnInit,
} from '@angular/core';
import { DataService } from '../data.service';
import { ClientSayComponent } from '../client-say/client-say.component';
import { FeaturedAuthorComponent } from '../featured-author/featured-author.component';
import { DiscountSectionComponent } from '../discount-section/discount-section.component';
import 'swiper/swiper-bundle.css'; // Import Swiper CSS
import { TopSellingComponent } from '../top-selling/top-selling.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ClientSayComponent,
    FeaturedAuthorComponent,
    FeaturedAuthorComponent,
    DiscountSectionComponent,
    TopSellingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  books: any[] = [];
  prices: number[] = [];
  blogs: any[] = [];
  currentDate = new Date();
  constructor(private dataService: DataService) {
    this.books = dataService.books;
    this.books[5].volumeInfo.authors = ['Management Association'];
    this.blogs = dataService.blogs;
  }

  windowWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.getCategories();
  }

  // Books That will be shown in top categories section
  booksInTopCategories: any[] = [];
  getCategories(): void {
    const uniqueCategories = new Set(); // Use Set to track unique categories
    this.books = this.books.reverse();
    for (let i = 0; i < this.books.length; i++) {
      const category = this.books[i].volumeInfo.categories?.[0];
      if (category && !uniqueCategories.has(category)) {
        uniqueCategories.add(category);
        this.booksInTopCategories.push(this.books[i]);
      }
    }
  }

  // That related to swiper per view with different screens
  checkSizeOfWindow(): number {
    if (this.windowWidth >= 1200) {
      return 5;
    } else if (this.windowWidth >= 992) {
      return 4;
    } else if (this.windowWidth >= 768) {
      return 3;
    } else if (this.windowWidth >= 500) {
      return 2;
    } else return 1;
  }

  checkTextLength(text: string): string {
    return text.length > 10 ? text.slice(0, 10) : text;
  }
}
