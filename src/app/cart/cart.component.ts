import { Component, OnInit } from '@angular/core';
import { BreadcrumbWrapperComponent } from '../breadcrumb-wrapper/breadcrumb-wrapper.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    BreadcrumbWrapperComponent,
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  booksSubtotal: number = 0;
  booksTotal: number = 0;
  shippingFees: number = 50;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    let storedData = localStorage.getItem('cart');
    storedData ? (this.cart = JSON.parse(storedData)) : (this.cart = []);
    this.totalAmount();
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  addQuentity(indexInpt: number): void {
    const quantities =
      document.querySelectorAll<HTMLInputElement>("[name='qunatity']");
    let input = quantities[indexInpt];
    input.value = String(+input.value + 1);
    this.cart[indexInpt].quantity = +input.value;
    this.saveDataToCart();
    this.totalAmount();
  }

  // Subtract quentity number
  subtractQuentity(indexInpt: number): void {
    const quantities =
      document.querySelectorAll<HTMLInputElement>("[name='qunatity']");
    let input = quantities[indexInpt];
    input.value === '1' ? '' : (input.value = String(+input.value - 1));
    this.cart[indexInpt].quantity = +input.value;
    this.saveDataToCart();
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
    this.booksSubtotal = total;
    this.booksTotal = total + this.shippingFees;
  }

  // Remove Book From Cart
  removeBook(index: number): void {
    this.cart.splice(index, 1);
    this.saveDataToCart();
    this.dataService.cart.next(this.cart);
  }

  navigateToCheckout(): void {
    this.scrollToTop();
    this.router.navigate(['checkout']);
  }

  // Save Cart Data To LocalStorage
  saveDataToCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
