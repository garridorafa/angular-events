import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from 'src/app/events/events-list.component';
import { EventsThumbnailsComponent } from 'src/app/events/events-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';

import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailsComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule],
  providers: [EventService, ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
