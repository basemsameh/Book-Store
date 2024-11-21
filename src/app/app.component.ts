import { Component, HostListener } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Book Store';
  isVisible = false; // Controls button visibility

  // Detect scroll events
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    this.isVisible = scrollPosition > 500; // Show button after scrolling 200px
  }

  // Scroll to the top of the page
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Part Of Loading Page
  isLoading = false; // Controls loading page visibility
  isHiding = false; // Controls fade-out effect

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showLoading();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.hideLoadingWithDelay();
      }
    });
  }

  // Show loading screen
  private showLoading(): void {
    this.isLoading = true;
    this.isHiding = false; // Ensure it's fully visible
  }

  // Hide loading screen with a fade-out effect
  private hideLoadingWithDelay(): void {
    setTimeout(() => {
      this.isHiding = true; // Start fade-out
      setTimeout(() => {
        this.isLoading = false; // Remove from DOM after fade-out
      }, 500); // Matches the CSS transition duration (0.5s)
    }, 500); // Ensure loading screen is shown for at least 1 second
  }
}
