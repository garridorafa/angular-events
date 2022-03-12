import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from 'src/app/events/events-list.component';
import { EventsThumbnailsComponent } from 'src/app/events/events-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventsDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    EventsDetailsComponent,
    EventsListComponent,
    EventsThumbnailsComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [EventService, ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
