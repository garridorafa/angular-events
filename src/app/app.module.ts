import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventsDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from 'src/app/events/events-list.component';
import { EventsThumbnailsComponent } from 'src/app/events/events-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';

import { appRoutes } from './routes';

import { EventResolveListService } from './events/event-list-resolve.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    Error404Component,
    EventsDetailsComponent,
    EventsListComponent,
    EventsThumbnailsComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],

  providers: [
    EventResolveListService,
    EventRouteActivator,
    EventService,
    ToastrService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    window.confirm('You have not saved this event, do you want really cancel?');
  }

  return true;
}
