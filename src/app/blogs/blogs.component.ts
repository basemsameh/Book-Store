import { Component } from '@angular/core';
import { BreadcrumbWrapperComponent } from '../breadcrumb-wrapper/breadcrumb-wrapper.component';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AsideBlogComponent } from '../aside-blog/aside-blog.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    BreadcrumbWrapperComponent,
    CommonModule,
    RouterModule,
    AsideBlogComponent,
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  blogs: any[] = [];
  constructor(private dataService: DataService, private router: Router) {
    this.blogs = dataService.blogs;
  }

  // Getting image according to id of blog
  checkIdNumber(id: number): string {
    if (id > 9) {
      return String(id);
    } else {
      return `0${String(id)}`;
    }
  }

  // Nav tabs
  hideLeftButton = true;
  hideRightButton = false;

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  navigateToBlog(id: number): void {
    this.scrollToTop();
    this.router.navigate(['blogs', id]);
  }
}
