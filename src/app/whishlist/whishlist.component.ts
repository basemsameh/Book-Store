import { Component } from '@angular/core';
import { BreadcrumbWrapperComponent } from '../breadcrumb-wrapper/breadcrumb-wrapper.component';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [BreadcrumbWrapperComponent, CommonModule, RouterModule],
  templateUrl: './whishlist.component.html',
  styleUrl: './whishlist.component.css',
})
export class WhishlistComponent {
  wishlist: any[] = [];
  constructor(private dataService: DataService, private router: Router) {
    let storedData = localStorage.getItem('wishlist');
    storedData
      ? (this.wishlist = JSON.parse(storedData))
      : (this.wishlist = []);
  }

  // Remove Book From Cart
  removeBook(index: number): void {
    this.wishlist.splice(index, 1);
    this.saveWishlistData();
    this.dataService.cart.next(this.wishlist);
  }

  // Save wishlist data
  saveWishlistData(): void {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    this.dataService.wishlist.next(this.wishlist);
  }

  // Navigate To Book Details
  navigateToBookDetails(id: any): void {
    this.scrollToTop();
    this.router.navigate(['shop', id]);
  }

  // Scroll To Top
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
