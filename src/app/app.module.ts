import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { SpeakersListComponent } from './speakers/speakers-list/speakers-list.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventItemComponent } from './events/event-item/event-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EventsListComponent,
    ProjectsListComponent,
    ArticlesListComponent,
    SpeakersListComponent,
    ContactsListComponent,
    PageNotFoundComponent,
    EventItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
