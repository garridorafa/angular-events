import { Routes } from '@angular/router';

import { CreateEventComponent } from './events/create-event.component';
import { EventsDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventsDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
