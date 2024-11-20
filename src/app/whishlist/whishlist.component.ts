import { Component } from '@angular/core';
import { BreadcrumbWrapperComponent } from '../breadcrumb-wrapper/breadcrumb-wrapper.component';

@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [BreadcrumbWrapperComponent],
  templateUrl: './whishlist.component.html',
  styleUrl: './whishlist.component.css',
})
export class WhishlistComponent {}
