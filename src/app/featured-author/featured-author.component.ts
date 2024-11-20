import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  Input,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-author',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './featured-author.component.html',
  styleUrl: './featured-author.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturedAuthorComponent {
  windowWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  // That related to swiper per view with different screens
  checkSizeOfWindow(): number {
    if (this.windowWidth >= 1200) {
      return 5;
    } else if (this.windowWidth >= 992) {
      return 4;
    } else if (this.windowWidth >= 768) {
      return 3;
    } else if (this.windowWidth >= 500) {
      return 2;
    } else return 1;
  }

  // Featured Author Section
  featuredAuthor: any[] = [
    { id: 1, authorName: 'Esther Howard', booksNumber: '10 Published Books' },
    { id: 2, authorName: 'Shikhon Islam', booksNumber: '07 Published Books' },
    { id: 3, authorName: 'Kawser Ahmed', booksNumber: '04 Published Books' },
    {
      id: 4,
      authorName: 'Brooklyn Simmons',
      booksNumber: '15 Published Books',
    },
    {
      id: 5,
      authorName: 'Leslie Alexander',
      booksNumber: '05 Published Books',
    },
    {
      id: 6,
      authorName: 'Guy Hawkins',
      booksNumber: '12 Published Books',
    },
  ];
}
