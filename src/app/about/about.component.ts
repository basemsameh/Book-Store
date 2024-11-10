import { Component } from '@angular/core';
import { BreadcrumbWrapperComponent } from '../breadcrumb-wrapper/breadcrumb-wrapper.component';
import { FeaturedAuthorComponent } from '../featured-author/featured-author.component';
import { ClientSayComponent } from '../client-say/client-say.component';
import { DiscountSectionComponent } from '../discount-section/discount-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    BreadcrumbWrapperComponent,
    FeaturedAuthorComponent,
    ClientSayComponent,
    DiscountSectionComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
