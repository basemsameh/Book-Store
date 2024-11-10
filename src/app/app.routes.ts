import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AuthorComponent } from './author/author.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pages/about', component: AboutComponent },
  { path: 'pages/author', component: AuthorComponent },
  { path: 'pages/faqs', component: FaqsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/:id', component: SingleBlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];
