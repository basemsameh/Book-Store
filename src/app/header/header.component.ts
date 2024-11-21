import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isFixed: boolean = false;
  cart!: any[];
  wishlist!: any[];
  constructor(private dataService: DataService) {
    dataService.cart.subscribe((value) => (this.cart = value));
    dataService.wishlist.subscribe((value) => (this.wishlist = value));
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isFixed = scrollPosition > 50; // Adjust threshold as needed
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  activeForm: 'login' | 'register' | 'recover' = 'login'; // Default form
  setActiveForm(form: 'login' | 'register' | 'recover'): void {
    this.activeForm = form;
  }
}
