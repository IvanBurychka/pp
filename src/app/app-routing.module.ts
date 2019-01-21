import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import {EventsListComponent} from './events/events-list/events-list.component';
import {ArticlesListComponent} from './articles/articles-list/articles-list.component';
import {SpeakersListComponent} from './speakers/speakers-list/speakers-list.component';
import {ContactsListComponent} from './contacts/contacts-list/contacts-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: 'speakers', component: SpeakersListComponent },
  { path: 'contacts', component: ContactsListComponent },
  // {
  //   path: 'products',
  //   loadChildren: './products/product.module#ProductModule'
  // },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
