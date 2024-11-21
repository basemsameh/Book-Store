import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
} from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { BreadcrumbWrapperComponent } from '../../breadcrumb-wrapper/breadcrumb-wrapper.component';

@Component({
  selector: 'app-shop-details',
  standalone: true,
  imports: [CommonModule, BreadcrumbWrapperComponent, RouterModule],
  templateUrl: './shop-details.component.html',
  styleUrl: './shop-details.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShopDetailsComponent implements OnInit, AfterViewInit {
  books: any[] = [];
  bookId: any;
  currentBook: any;
  cart: any[] = [];
  windowWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.books = dataService.books;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: Params) => {
      this.bookId = res['id'];
      this.getCurrentBook();
      console.log(this.currentBook);
    });
    // Get data of cart from localStorage
    let storedData = localStorage.getItem('cart');
    storedData ? (this.cart = JSON.parse(storedData)) : (this.cart = []);
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

  // Add to cart
  addToCart(quantity: any): void {
    this.cart.push({
      id: this.currentBook.id,
      image: this.currentBook.volumeInfo.imageLinks.smallThumbnail,
      title: this.currentBook.volumeInfo.title,
      price: this.currentBook.saleInfo.listPrice.amount,
      quantity: +quantity,
    });
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.dataService.cart.next(this.cart);
    console.log(this.cart);
  }

  getCurrentBook(): void {
    for (let i = 0; i < this.books.length; i++) {
      this.books[i].id === this.bookId
        ? (this.currentBook = this.books[i])
        : '';
    }
  }

  // Add quentity number
  addQuentity(input: HTMLInputElement): void {
    input.value = String(+input.value + 1);
  }

  // Subtract quentity number
  subtractQuentity(input: HTMLInputElement): void {
    input.value === '1' ? '' : (input.value = String(+input.value - 1));
  }

  // Navigate to shop details
  navigateToBook(id: any): void {
    window.scrollTo(0, 0);
    this.router.navigate(['shop', id]);
  }

  comments: any[] = [
    { id: 1, fullName: 'Leslie Alexander' },
    { id: 2, fullName: 'Alex Flores' },
    { id: 3, fullName: 'Sara Andro' },
  ];

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
