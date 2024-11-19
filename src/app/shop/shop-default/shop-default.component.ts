import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-default',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shop-default.component.html',
  styleUrl: './shop-default.component.css',
  providers: [DataService],
})
export class ShopDefaultComponent {
  minPrice: number = 100; // Default value for the slider
  maxPrice: number = 5000; // Default value for the slider
  booksCategories: any[] = [];
  books: any[] = [];
  currentCategory: string[] = [];

  constructor(private dataService: DataService, private router: Router) {
    this.books = dataService.books;
    console.log(this.books);
    this.getCategories();
  }

  // Get Categories
  getCategories(): void {
    const uniqueCategories = new Set(); // Use Set to track unique categories
    this.books = this.books.reverse();
    for (let i = 0; i < this.books.length; i++) {
      const category = this.books[i].volumeInfo.categories?.[0];
      if (category && !uniqueCategories.has(category)) {
        uniqueCategories.add(category);
        this.booksCategories.push(this.books[i]);
      }
    }
  }

  // Toggle Active Category
  toggleActiveCategory(index: number): void {
    let categories = document.querySelectorAll('.categories .category');
    categories[index].classList.toggle('active');
    const categoryName: any = categories[index].textContent?.trim();
    if (this.currentCategory.includes(categoryName)) {
      this.currentCategory.splice(
        this.currentCategory.indexOf(categoryName),
        1
      );
    } else {
      this.currentCategory.push(categoryName?.trim());
    }
  }

  // Reviews
  reviews: any[] = [
    { reviewNum: 35, startsNum: 5 },
    { reviewNum: 24, startsNum: 4 },
    { reviewNum: 15, startsNum: 3 },
    { reviewNum: 2, startsNum: 2 },
    { reviewNum: 1, startsNum: 1 },
  ];

  // Get Stars number and push it in innerHTML of lables
  getNumberStars(index: number): void {
    let labels = document.querySelectorAll('.review label');
    if (index === 0) {
      labels[index].innerHTML = `<i class="fa-solid fa-star mx-1"></i>`.repeat(
        5
      );
    } else if (index === 1) {
      labels[index].innerHTML = `<i class="fa-solid fa-star mx-1"></i>`.repeat(
        4
      );
      labels[index].innerHTML += `<i class="fa-regular fa-star mx-1"></i>`;
    } else if (index === 2) {
      labels[index].innerHTML = `<i class="fa-solid fa-star mx-1"></i>`.repeat(
        3
      );
      labels[index].innerHTML +=
        `<i class="fa-regular fa-star mx-1"></i>`.repeat(2);
    } else if (index === 3) {
      labels[index].innerHTML = `<i class="fa-solid fa-star mx-1"></i>`.repeat(
        2
      );
      labels[index].innerHTML +=
        `<i class="fa-regular fa-star mx-1"></i>`.repeat(3);
    } else {
      labels[index].innerHTML = `<i class="fa-solid fa-star mx-1"></i>`;
      labels[index].innerHTML +=
        `<i class="fa-regular fa-star mx-1"></i>`.repeat(4);
    }
  }

  // Update slider value
  updateSliderValue(inputId: string): void {
    const rangeInput = document.getElementById(inputId) as HTMLInputElement;
    const value = `${
      (parseInt(rangeInput.value) / parseInt(rangeInput.max)) * 100
    }%`;
    // Set the correct CSS variable based on the inputId
    if (inputId === 'rangeInpt1') {
      rangeInput.style.setProperty('--value1', value);
    } else if (inputId === 'rangeInpt2') {
      rangeInput.style.setProperty('--value2', value);
    }
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