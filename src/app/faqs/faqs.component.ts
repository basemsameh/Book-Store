import { Component } from '@angular/core';
import { BreadcrumbWrapperComponent } from '../breadcrumb-wrapper/breadcrumb-wrapper.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [BreadcrumbWrapperComponent, CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
})
export class FaqsComponent {
  faqsName: any[] = [
    'Account',
    'Payment',
    'Delivery',
    'Availability',
    'Support',
  ];

  account: any[] = [
    {
      question: 'How do I create an account?',
      answer:
        'You can create an account by clicking on "Sign Up" at the top of our website and filling out the required information.',
    },
    {
      question: 'How do I reset my password?',
      answer:
        'Go to the login page, click "Forgot Password," and follow the prompts to reset it via your registered email.',
    },
    {
      question: 'Are there any membership benefits?',
      answer:
        'Yes! Members get exclusive discounts, early access to new releases, and free shipping on select orders.',
    },
    {
      question: 'Can I update my account details?',
      answer:
        'You can update your profile information by logging into your account and going to the “Account Settings” section.',
    },
  ];

  payment: any[] = [
    {
      question: 'How can I place an order?',
      answer:
        'Browse for books, add them to your cart, and proceed to checkout. Follow the prompts to complete the purchase.',
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'We accept major credit/debit cards, PayPal, and bookstore gift cards.',
    },
    {
      question: 'Can I change my order after placing it?',
      answer:
        'Changes may be possible if the order has not shipped. Contact customer support as soon as possible for assistance.',
    },
    {
      question: 'How do I track my order?',
      answer:
        'Once shipped, you’ll receive a tracking link via email, or you can track it through your account under "Order History."',
    },
  ];

  delivery: any[] = [
    {
      question: 'What are the shipping options?',
      answer:
        'We offer standard, expedited, and express shipping options. Shipping costs and times vary by location and option.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Standard shipping typically takes 3-7 business days. Expedited and express options are faster, depending on location.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Yes, we offer international shipping to many countries. Shipping rates and delivery times may vary.',
    },
    {
      question: 'What should I do if my order hasn’t arrived?',
      answer:
        'Check your tracking link for updates. If it’s delayed, please contact our customer support for assistance.',
    },
  ];

  availability: any[] = [
    {
      question: 'How do I know if a book is in stock?',
      answer:
        'Stock availability is listed on each book’s product page. You can also contact customer support for specific inquiries.',
    },
    {
      question: 'Can I request a book that’s out of stock?',
      answer:
        'Yes, you can join the waitlist for out-of-stock books. We’ll notify you via email when they’re available again.',
    },
    {
      question: 'Do you sell digital or audiobooks?',
      answer:
        'Yes, we offer a variety of e-books and audiobooks. Look for the “Digital” label on eligible titles.',
    },
    {
      question: 'What if I can’t find a specific book?',
      answer:
        "Use our search tool to find books by title, author, or ISBN. If it's unavailable, feel free to request it through customer support.",
    },
  ];

  support: any[] = [
    {
      question: 'How do I contact customer support?',
      answer:
        'Reach out through our “Contact Us” page, available via phone, email, or chat support during business hours.',
    },
    {
      question: 'What are your customer support hours?',
      answer:
        'Our support team is available Monday-Friday, 9 AM to 5 PM. We strive to respond to all inquiries within 24 hours.',
    },
    {
      question: 'Where can I find my purchase history?',
      answer:
        'Log in to your account and visit “Order History” to view your previous purchases.',
    },
    {
      question: 'How can I provide feedback or suggestions?',
      answer:
        'We love to hear from our customers! Submit feedback through the “Feedback” section on our website.',
    },
  ];

  faqName = this.faqsName[0];
  getValue(value: string) {
    this.faqName = value;
    this.showFaqs();
    // Return buttons and icons to its right place
    let btns = document.querySelectorAll('.tab-content .tab-pane button');
    let icons = document.querySelectorAll('.tab-content .tab-pane button i');
    btns.forEach((btn, index) => {
      if (index > 0) {
        btn.classList.contains('active') ? btn.classList.remove('active') : '';
      } else btn.classList.add('active');
    });
    icons.forEach((icon, index) => {
      if (index > 0) {
        if (icon.classList.contains('fa-angles-down')) {
          icon.classList.remove('fa-angles-down');
          icon.classList.add('fa-angles-right');
        }
      } else {
        if (!icon.classList.contains('fa-angles-down')) {
          icon.classList.remove('fa-angles-right');
          icon.classList.add('fa-angles-down');
        }
      }
    });
  }

  currentLoopingData: any[] = this.account;
  showFaqs(): void {
    if (this.faqName === 'Account') {
      this.currentLoopingData = this.account;
    } else if (this.faqName === 'Payment') {
      this.currentLoopingData = this.payment;
    } else if (this.faqName === 'Delivery') {
      this.currentLoopingData = this.delivery;
    } else if (this.faqName === 'Availability') {
      this.currentLoopingData = this.availability;
    } else {
      this.currentLoopingData = this.support;
    }
  }

  toggleActiveQuestino(id: string): void {
    let btns = document.querySelectorAll('.tab-content .tab-pane button');
    btns.forEach((btn) => {
      if (btn.id === id) {
        btn.classList.toggle('active');
      }
    });
  }

  toggleArrowIcon(id: string): void {
    let icons = document.querySelectorAll('.tab-content .tab-pane button i');
    icons.forEach((e) => {
      if (e.id === id) {
        if (e.classList.contains('fa-angles-down')) {
          e.classList.remove('fa-angles-down');
          e.classList.add('fa-angles-right');
        } else {
          e.classList.add('fa-angles-down');
          e.classList.remove('fa-angles-right');
        }
      }
    });
  }
}
