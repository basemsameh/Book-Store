import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BreadcrumbWrapperComponent } from '../breadcrumb-wrapper/breadcrumb-wrapper.component';
import { DataService } from '../data.service';
import { AsideBlogComponent } from '../aside-blog/aside-blog.component';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [CommonModule, BreadcrumbWrapperComponent, AsideBlogComponent],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css',
})
export class SingleBlogComponent implements OnInit {
  blogId: any;
  currentBlog: any;
  blogs: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.blogs = dataService.blogs;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: Params) => {
      this.blogId = +res['id'];
      this.getCurrentBlog();
    });
  }

  getCurrentBlog(): void {
    for (let i = 0; i < this.blogs.length; i++) {
      if (this.blogs[i].id === +this.blogId) {
        this.currentBlog = this.blogs[i];
      }
    }
  }

  checkIdNumber(id: number): string {
    if (id > 9) {
      return String(id);
    } else {
      return `0${String(id)}`;
    }
  }

  comments: any[] = [
    { id: 1, fullName: 'Leslie Alexander' },
    { id: 2, fullName: 'Alex Flores' },
  ];
}
