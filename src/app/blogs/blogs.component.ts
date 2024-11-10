import { Component } from '@angular/core';
import { BreadcrumbWrapperComponent } from '../breadcrumb-wrapper/breadcrumb-wrapper.component';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [BreadcrumbWrapperComponent, CommonModule, RouterModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  blogs: any[] = [];
  categories: any[] = [];
  latesPosts: any[] = [];
  constructor(private dataService: DataService, private router: Router) {
    this.blogs = dataService.blogs;
    this.getNumberOfCategory();
    this.getLatesPosts();
  }

  // Get categories of blogs
  getBlogsCategories(): any[] {
    const categories: any[] = [];
    for (let i = 0; i < this.blogs.length; i++) {
      !categories.includes(this.blogs[i].category)
        ? categories.push(this.blogs[i].category)
        : '';
    }
    return categories;
  }

  // Get numbers of item in each category
  getNumberOfCategory(): void {
    const numbers: number[] = [];
    const categories: any[] = this.getBlogsCategories();
    for (let i = 0; i < categories.length; i++) {
      let num: number = 0;
      for (let k = 0; k < this.blogs.length; k++) {
        if (this.blogs[k].category === categories[i]) {
          num += 1;
        }
      }
      numbers.push(num);
      this.categories.push({ category: categories[i], number: numbers[i] });
    }
    console.log(this.categories);
  }

  checkIdNumber(id: number): string {
    if (id > 9) {
      return String(id);
    } else {
      return `0${String(id)}`;
    }
  }

  // Lates Posts
  getLatesPosts(): void {
    const dates: any[] = [];
    for (let i = 0; i < this.blogs.length; i++) {
      dates.push(this.blogs[i].publishedDate);
    }
    dates.sort((a: any, b: any) => {
      // Parse dates to compare them in numerical form
      const dateA: any = new Date(a);
      const dateB: any = new Date(b);
      // Sort descending based on order
      return dateB - dateA;
    });
    this.latesPosts = dates.slice(0, 3);
    console.log(this.latesPosts);
  }

  // Nav tabs
  hideLeftButton = true;
  hideRightButton = false;

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  navigateToBlog(id: number): void {
    this.router.navigate(['blogs', id]);
  }
}
