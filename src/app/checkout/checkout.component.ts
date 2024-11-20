import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbWrapperComponent } from '../breadcrumb-wrapper/breadcrumb-wrapper.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, BreadcrumbWrapperComponent, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  cart: any[] = [];
  shippingFees: number = 50;
  booksTotal: number = 0;
  ngOnInit(): void {
    let storedData = localStorage.getItem('cart');
    storedData ? (this.cart = JSON.parse(storedData)) : (this.cart = []);
    this.totalAmount();
  }

  // Calculate Subtotal for specific book
  calcSubtotal(index: number): number {
    const price = this.cart[index].price;
    const quantity = this.cart[index].quantity;
    return price * quantity;
  }

  // Calculate Total Amount
  totalAmount(): void {
    let total = 0;
    for (let i = 0; i < this.cart.length; i++) {
      total += this.calcSubtotal(i);
    }
    this.booksTotal = total + this.shippingFees;
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
