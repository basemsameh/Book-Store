import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
} from '@angular/core';
import { DataService } from '../data.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-selling',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './top-selling.component.html',
  styleUrl: './top-selling.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopSellingComponent implements AfterViewInit {
  books: any[] = [];
  constructor(private dataService: DataService, private router: Router) {
    this.books = dataService.books;
    this.books[5].volumeInfo.authors = ['Management Association'];
  }

  ngAfterViewInit(): void {
    this.changeWishlistIcons();
  }

  // Change class name of wishlist icons
  changeWishlistIcons(): void {
    this.dataService.changeWishlistIcons();
  }

  // Add to or Remove from wishlist
  addOrRemoveToWishlist(bookId: any): void {
    this.dataService.addOrRemoveToWishlist(bookId);
    this.changeWishlistIcons();
  }

  windowWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
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

  // Navigate to shop details
  navigateToBook(id: any): void {
    window.scrollTo(0, 0);
    this.router.navigate(['shop', id]);
  }

  // Scroll to top
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
