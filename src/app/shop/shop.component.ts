import { Component } from '@angular/core';
import { BreadcrumbWrapperComponent } from '../breadcrumb-wrapper/breadcrumb-wrapper.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopDefaultComponent } from './shop-default/shop-default.component';
import { ShopListComponent } from './shop-list/shop-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    BreadcrumbWrapperComponent,
    CommonModule,
    ShopDefaultComponent,
    ShopListComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {}
