import { AfterViewInit, Component } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css',
})
export class ShopListComponent implements AfterViewInit {
  books: any[] = [];
  constructor(private dataService: DataService, private router: Router) {
    this.books = dataService.books;
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

  // Nav tabs
  hideLeftButton = true;
  hideRightButton = false;

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  // Navigate to shop details
  navigateToBook(id: any): void {
    window.scrollTo(0, 0);
    this.router.navigate(['shop', id]);
  }
}
