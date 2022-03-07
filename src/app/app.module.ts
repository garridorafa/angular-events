import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from 'src/app/events/events-list.component';
import { EventsThumbnailsComponent } from 'src/app/events/events-thumbnail.component';

@NgModule({
  declarations: [AppComponent, EventsListComponent, EventsThumbnailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
