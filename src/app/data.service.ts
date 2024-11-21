import { HttpClient } from '@angular/common/http';
import { afterNextRender, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  books: any[] = [];
  cart: BehaviorSubject<any> = new BehaviorSubject([]);
  wishlist: BehaviorSubject<any> = new BehaviorSubject([]);

  getFirstBooks(): Observable<any> {
    return this.httpClient.get(
      'https://www.googleapis.com/books/v1/volumes?q=search+term&key=AIzaSyAshynosc--UqWGlQVAvyYO3oCjJF-IkC8'
    );
  }

  getSecondBooks(): Observable<any> {
    return this.httpClient.get(
      'https://www.googleapis.com/books/v1/volumes?q=quilting'
    );
  }

  constructor(private httpClient: HttpClient) {
    this.getFirstBooks().subscribe((x: any) => {
      this.books = [...this.books, ...x.items];
    });
    this.getSecondBooks().subscribe((x) => {
      this.books = [...this.books, ...x.items];
    });
    if (this.books.length > 0) {
      this.fillEmpty();
    }
    afterNextRender(() => {
      // Get Cart
      const storedData = localStorage.getItem('cart');
      storedData ? this.cart.next(JSON.parse(storedData)) : this.cart.next([]);

      // Get wishlist
      const storedWishlist = localStorage.getItem('wishlist');
      storedWishlist
        ? this.wishlist.next(JSON.parse(storedWishlist))
        : this.wishlist.next([]);
    });
  }

  // Fill empty elements
  fillEmpty(): void {
    for (let i = 0; i < this.books.length; i++) {
      if (!this.books[i].volumeInfo.categories) {
        this.books[i].volumeInfo.categories = ['Business & Economics'];
      }
      if (!this.books[i].volumeInfo.publisher) {
        this.books[i].volumeInfo.publisher = 'InfoWorld Media Group, Inc.';
      }
      if (!this.books[i].saleInfo.listPrice) {
        this.books[i].saleInfo.listPrice = { amount: 0 };
        this.books[i].saleInfo.listPrice.amount = 832.15;
      }
    }
  }

  // Blogs
  blogs = [
    {
      id: 1,
      title: "2024's Hottest Book Trends You Don't Want to Miss",
      description: `The publishing world is constantly evolving, and 2024 has introduced some truly intriguing trends. From new voices in diverse communities to the rise of eco-literature, books are reflecting the world around us more vividly than ever. This blog explores the major trends that every book lover should be watching, including popular genres, author breakthroughs, and stories that challenge social norms...`,
      author: 'Jane Doe',
      publishedDate: '2024-10-21',
      tags: ['Book Trends', 'New Releases', 'Diversity'],
      category: 'Books Store',
    },
    {
      id: 2,
      title: 'Top 10 Bestselling Authors of the Decade and Their Masterpieces',
      description: `In the last decade, we’ve seen the rise of phenomenal storytellers whose works have become household names. This article takes you through the top 10 bestselling authors of the 2020s, examining their impactful books and why readers can’t get enough of them. Discover the stories that captivated millions, from thrilling mysteries to heartwarming romances...`,
      author: 'John Smith',
      publishedDate: '2024-09-15',
      tags: ['Bestsellers', 'Authors', 'Top 10'],
      category: 'Books Store',
    },
    {
      id: 3,
      title: 'Best Educational Books for Kids to Boost Learning',
      description: `Educating young minds in a fun and engaging way can be challenging, but the right books make all the difference. This blog presents a curated list of books perfect for enhancing children's learning while keeping them entertained. From interactive science guides to captivating history tales, these books cover all bases for young readers with curiosity and imagination...`,
      author: 'Tom Mitchell',
      publishedDate: '2024-03-10',
      tags: ['Children', 'Education', 'Learning'],
      category: 'Education',
    },
    {
      id: 4,
      title: 'Must-Read Adventure Series for Thrill Seekers',
      description: `Adventure novels offer readers an escape into thrilling worlds filled with danger and excitement. For those seeking such adrenaline-pumping experiences, this blog showcases some of the best adventure series of all time. Whether it’s exploring lost lands, solving mysteries, or battling supernatural foes, these books promise unforgettable journeys...`,
      author: 'Steve Jacobs',
      publishedDate: '2024-02-25',
      tags: ['Adventure', 'Series', 'Thrillers'],
      category: 'Adventure',
    },
    {
      id: 5,
      title: 'Exploring the Best Romantic Novels of the Year',
      description: `From heartwarming stories to soul-stirring epics, romance novels are beloved by readers everywhere. This year, a number of romantic novels have stood out, either for their intense storytelling or for their unique takes on modern love. In this blog, discover our top picks for romance novels that are sure to leave you enchanted and inspired...`,
      author: 'Linda Brown',
      publishedDate: '2024-07-10',
      tags: ['Romance', 'Best Novels', 'Love Stories'],
      category: 'Romance',
    },
    {
      id: 6,
      title: 'Educational Books Every College Student Should Read',
      description: `For college students looking to expand their knowledge, there are numerous books available beyond the standard curriculum. This blog highlights educational books that provide new perspectives, essential skills, and life advice for students. From mastering finances to understanding psychology, these books offer invaluable insights...`,
      author: 'Kevin Ross',
      publishedDate: '2024-08-02',
      tags: ['College', 'Education', 'Essential Reads'],
      category: 'Education',
    },
    {
      id: 7,
      title: 'Outdoor Adventures: Books That Inspire Travel',
      description: `If you dream of exploring the great outdoors, these books are the perfect companions. Dive into stories of travel and survival as these authors recount thrilling adventures in some of the world's most stunning landscapes. This list covers inspiring tales from the depths of the jungle to snowy mountain peaks, all of which fuel a desire for exploration...`,
      author: 'Sarah Lopez',
      publishedDate: '2024-05-20',
      tags: ['Travel', 'Adventure', 'Nature'],
      category: 'Adventure',
    },
    {
      id: 8,
      title: 'Starting a New Bookstore: Tips and Inspiration',
      description: `Opening a bookstore can be a dream come true for book lovers. This guide explores everything you need to know to start a bookstore, from choosing a location to stocking the best books. It also features interviews with successful bookstore owners who share their tips on creating a cozy atmosphere that keeps readers coming back...`,
      author: 'Mark Taylor',
      publishedDate: '2024-04-28',
      tags: ['Bookstore', 'Business', 'Inspiration'],
      category: 'Books Store',
    },
    {
      id: 9,
      title: 'Activities to Boost Your Reading Habit',
      description: `Looking to make reading a daily habit? This blog outlines fun activities and creative methods to make reading part of your lifestyle. From joining book clubs to setting reading goals, these strategies help turn reading into an enjoyable and enriching daily practice...`,
      author: 'Emily Watson',
      publishedDate: '2024-06-12',
      tags: ['Reading', 'Habits', 'Activities'],
      category: 'Activities',
    },
    {
      id: 10,
      title: 'Romantic Classics That Transcend Time',
      description: `Romantic classics offer timeless stories of love and loss that resonate with readers of every generation. This blog revisits some of the most cherished romances in literature, exploring their themes and why they remain beloved to this day. Whether it's the allure of forbidden love or epic sagas, these stories touch the heart in profound ways...`,
      author: 'Laura Green',
      publishedDate: '2024-09-08',
      tags: ['Romance', 'Classics', 'Literature'],
      category: 'Romance',
    },
    {
      id: 11,
      title: 'The Ultimate Guide to Organizing Your Home Library',
      description: `Creating a home library is more than just collecting books; it's about building a sanctuary for knowledge and creativity. In this guide, explore various ways to categorize your collection, create a cozy reading space, and even add decor that reflects your love for literature. Whether you're a seasoned collector or just starting, this blog offers tips to turn any space into a perfect reading nook...`,
      author: 'Alex Young',
      publishedDate: '2024-10-01',
      tags: ['Library', 'Home Organization', 'Reading Space'],
      category: 'Activities',
    },
    {
      id: 12,
      title: 'How Bookstores are Embracing Digital Transformations',
      description: `As the world of retail shifts increasingly towards digital, bookstores are also embracing change. This article delves into how bookstores are utilizing technology—like virtual book clubs, online ordering, and e-books—to connect with readers globally. It also highlights the challenges and opportunities that come with this transformation, as bookstores find new ways to thrive in a digital age...`,
      author: 'Rachel Adams',
      publishedDate: '2024-10-05',
      tags: ['Digital Transformation', 'Bookstores', 'Retail'],
      category: 'Books Store',
    },
  ];

  // This part related to wishlist and favourite icons
  // Change class name of wishlist icons
  changeWishlistIcons(): void {
    let dataInWishlist: any;
    this.wishlist.subscribe((value) => (dataInWishlist = value));
    const wishlistIcons = document.querySelectorAll<HTMLElement>(
      'i[title="Add To Wishlist"]'
    );
    console.log(wishlistIcons);
    if (dataInWishlist.length !== 0) {
      for (let i = 0; i < wishlistIcons.length; i++) {
        // console.log(wishlistIcons[i].id);
        for (let k = 0; k < dataInWishlist.length; k++) {
          wishlistIcons[i].id === dataInWishlist[k].id
            ? (wishlistIcons[i].className = 'fa-solid fa-heart')
            : (wishlistIcons[i].className = 'fa-regular fa-heart');
        }
      }
    } else {
      wishlistIcons.forEach((icon) => (icon.className = 'fa-regular fa-heart'));
    }
  }

  // Add to or Remove from wishlist
  addOrRemoveToWishlist(bookId: any): void {
    let dataInWishlist: any;
    this.wishlist.subscribe((value) => (dataInWishlist = value));
    const currentBook = this.books.find((book) => book.id === bookId);
    let existCurrentBook = dataInWishlist?.find(
      (ele: any) => ele.id === currentBook.idW
    )
      ? true
      : false;
    // Check if current book exist in the wishlist or not
    if (!existCurrentBook) {
      dataInWishlist.push({
        id: currentBook.id,
        image: currentBook.volumeInfo.imageLinks.smallThumbnail,
        title: currentBook.volumeInfo.title,
        price: currentBook.saleInfo.listPrice.amount,
        category: currentBook.volumeInfo.categories,
        date: new Date(),
      });
    } else {
      dataInWishlist.find((book: any, bookIndex: any) => {
        if (book.id === currentBook.id) {
          dataInWishlist.splice(bookIndex, 1);
        }
      });
    }
    console.log(dataInWishlist);
    this.wishlist.next(dataInWishlist);
    localStorage.setItem('wishlist', JSON.stringify(dataInWishlist));
  }
}
