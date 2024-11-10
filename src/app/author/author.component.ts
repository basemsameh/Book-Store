import { Component } from '@angular/core';
import { BreadcrumbWrapperComponent } from '../breadcrumb-wrapper/breadcrumb-wrapper.component';
import { TopSellingComponent } from '../top-selling/top-selling.component';
import { FeaturedAuthorComponent } from '../featured-author/featured-author.component';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [
    BreadcrumbWrapperComponent,
    TopSellingComponent,
    FeaturedAuthorComponent,
  ],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {}
