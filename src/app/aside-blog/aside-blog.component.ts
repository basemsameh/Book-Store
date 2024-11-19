import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-aside-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside-blog.component.html',
  styleUrl: './aside-blog.component.css',
})
export class AsideBlogComponent implements OnInit {
  categories: any[] = [];
  latesPosts: any[] = [];
  tags: any[] = [];
  blogs!: any[];
  blogId!: number;
  currentCategory: string = '';
  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.blogs = dataService.blogs;
    this.getNumberOfCategory();
    this.getTags();
    this.getLatesPosts();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: Params) => {
      this.blogId = +res['id'];
      console.log(this.blogId);
      this.getcurrentCategory();
    });
  }

  // Get current Category
  getcurrentCategory(): void {
    for (let i = 0; i < this.blogs.length; i++) {
      if (this.blogs[i].id === +this.blogId) {
        this.currentCategory = this.blogs[i].category;
        break;
      } else this.currentCategory = '';
    }
  }

  // Get Tags
  getTags(): void {
    let tagsArr: any[] = [];
    for (let i = 0; i < this.blogs.length; i++) {
      tagsArr.push(this.blogs[i].tags[0]);
    }
    let uniqueTags = new Set(tagsArr.sort());
    this.tags = [...uniqueTags];
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
  }

  // Getting image according to id of blog
  checkIdNumber(id: number): string {
    if (id > 9) {
      return String(id);
    } else {
      return `0${String(id)}`;
    }
  }

  navigateToBlog(id: number): void {
    window.scrollTo(0, 0);
    this.router.navigate(['blogs', id]);
  }
}
