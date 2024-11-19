import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css',
})
export class ShopListComponent {
  books: any[] = [];
  constructor(private dataService: DataService, private router: Router) {
    this.books = dataService.books;
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
