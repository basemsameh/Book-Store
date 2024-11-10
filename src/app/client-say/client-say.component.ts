import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';

@Component({
  selector: 'app-client-say',
  standalone: true,
  imports: [],
  templateUrl: './client-say.component.html',
  styleUrl: './client-say.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientSayComponent {
  windowWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  // That related to swiper per view with different screens
  sizeOfSwiperClients(): number {
    if (this.windowWidth >= 1200) {
      return 3;
    } else if (this.windowWidth >= 992) {
      return 2;
    } else return 1;
  }

  // For (What are our clients says section)
  clientsSays: any[] = [
    {
      id: 1,
      clientName: 'Adam Smith',
      clientJob: 'Marketing Coordinator',
      linkImage:
        'https://gramentheme.com/html/bookle/assets/img/testimonial/01.jpg',
      say: 'One of the most powerful takeaways from this book is the emphasis on adopting a mindset of abundance and possibility. The idea that we can choose to see opportunities rather than limitations is a game.',
      logo: 'https://gramentheme.com/html/bookle/assets/img/testimonial/logo2.png',
    },
    {
      id: 2,
      clientName: 'Dianne Russell',
      clientJob: 'Project Manager',
      linkImage:
        'https://gramentheme.com/html/bookle/assets/img/testimonial/02.jpg',
      say: 'The idea that we can choose to see opportunities rather than limitations is a game-changer. The book encourages readers to step out of their comfort zones and embrace a more positive outlook on life.',
      logo: 'https://gramentheme.com/html/bookle/assets/img/testimonial/logo1.png',
    },
    {
      id: 3,
      clientName: 'Ronald Richards',
      clientJob: 'Marketing Coordinator',
      linkImage:
        'https://gramentheme.com/html/bookle/assets/img/testimonial/03.jpg',
      say: 'The Art of Possibility" by Rosamund Stone Zander and Benjamin Zander is a transformative read that challenges conventional thinking and opens up new possibilities. As a reader, I found myself profoundly .',
      logo: 'https://gramentheme.com/html/bookle/assets/img/testimonial/logo2.png',
    },
    {
      id: 4,
      clientName: 'Ronald Richards',
      clientJob: 'Marketing Coordinator',
      linkImage:
        'https://gramentheme.com/html/bookle/assets/img/testimonial/04.jpg',
      say: 'From the very first chapter, the authors engage readers with inspiring stories and practical insights. Benjamin Zander is experiences as a conductor bring a unique perspective to leadership .',
      logo: 'https://gramentheme.com/html/bookle/assets/img/testimonial/logo1.png',
    },
  ];
}
