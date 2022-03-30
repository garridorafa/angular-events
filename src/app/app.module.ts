import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import {
  CreateEventComponent,
  EventResolveListService,
  EventRouteActivator,
  EventsDetailsComponent,
  EventService,
  EventsListComponent,
  EventsThumbnailsComponent,
} from './events';
import { NavBarComponent } from './nav/nav-bar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

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
