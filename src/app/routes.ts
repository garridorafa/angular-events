import { Routes } from '@angular/router';

import { CreateEventComponent } from './events/create-event.component';
import { CreateSessionComponent } from './events';
import { Error404Component } from './errors/404.component';
import { EventResolveListService } from './events/event-list-resolve.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventResolveListService },
  },
  {
    path: 'events/:id',
    component: EventsDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent,
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
