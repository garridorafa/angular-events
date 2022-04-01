import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import {
  CreateEventComponent,
  CreateSessionComponent,
  EventResolveListService,
  EventRouteActivator,
  EventsDetailsComponent,
  EventService,
  EventsListComponent,
  EventsThumbnailsComponent,
  SessionListComponent,
} from './events';
import { NavBarComponent } from './nav/nav-bar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    EventsDetailsComponent,
    EventsListComponent,
    EventsThumbnailsComponent,
    NavBarComponent,
    SessionListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthService,
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
