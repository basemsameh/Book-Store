import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumb-wrapper.component.html',
  styleUrl: './breadcrumb-wrapper.component.css',
})
export class BreadcrumbWrapperComponent {
  @Input({ required: true }) title!: string;
}
