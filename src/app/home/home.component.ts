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
import { Router, RouterModule } from '@angular/router';

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
    RouterModule,
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
  wishlist: any[] = [];
  constructor(private dataService: DataService, private router: Router) {
    this.books = dataService.books;
    this.blogs = dataService.blogs;
    console.log(this.books);
  }

  windowWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  ngOnInit(): void {
    let storedData = localStorage.getItem('wishlist');
    storedData
      ? (this.wishlist = JSON.parse(storedData))
      : (this.wishlist = []);
    this.getCategories();
    this.changeWishlistIcons();
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

  navigateToBlog(id: number): void {
    window.scrollTo(0, 0);
    this.router.navigate(['blogs', id]);
  }

  // Navigate to shop details
  navigateToBook(id: any): void {
    window.scrollTo(0, 0);
    this.router.navigate(['shop', id]);
  }

  // Change class name of wishlist icons
  changeWishlistIcons(): void {
    let wishlistIcons = document.querySelectorAll<HTMLElement>(
      '[title="Add To Wishlist"]'
    );
    console.log(wishlistIcons);
    if (this.wishlist.length !== 0) {
      for (let i = 0; i < wishlistIcons.length; i++) {
        for (let k = 0; k < this.wishlist.length; k++) {
          wishlistIcons[i].id === this.wishlist[k].id
            ? (wishlistIcons[i].className = 'fa-solid fa-heart')
            : (wishlistIcons[i].className = 'fa-regular fa-heart');
        }
      }
    } else {
      wishlistIcons.forEach((icon) => (icon.className = 'fa-regular fa-heart'));
    }
  }

  // Add to or Remove from wishlist
  addOrRemoveToWishlist(bookId: any): void {
    const currentBook = this.books.find((book) => book.id === bookId);
    let existCurrentBook = this.wishlist.find(
      (ele) => ele.id === currentBook.id
    )
      ? true
      : false;
    // Check if current book exist in the wishlist or not
    if (!existCurrentBook) {
      this.wishlist.push({
        id: currentBook.id,
        image: currentBook.volumeInfo.imageLinks.smallThumbnail,
        title: currentBook.volumeInfo.title,
        price: currentBook.saleInfo.listPrice.amount,
        category: currentBook.volumeInfo.categories,
        date: this.currentDate,
      });
    } else {
      this.wishlist.find((book, bookIndex) => {
        if (book.id === currentBook.id) {
          this.wishlist.splice(bookIndex, 1);
        }
      });
    }
    console.log(this.wishlist);
    this.saveWishlistData();
    this.changeWishlistIcons();
  }

  // Save wishlist data
  saveWishlistData(): void {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    this.dataService.wishlist.next(this.wishlist);
  }
}
